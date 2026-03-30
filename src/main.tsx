import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import "./i18n";
import App, { AppRoutes } from "./App";
import { staticRoutes } from "./routes";
import { blogPosts } from "./data/blogData";
import { blogPostsUr } from "./data/blogDataUr";
import { blogPostsFr } from "./data/blogDataFr";

// ─── Warm geo-detect as early as possible ────────────────────────────────────
// Kick this off before React mounts so the promise is already resolving by the
// time the Hero / useCurrency hook runs. This prevents a 14s+ element-render
// delay on the LCP element caused by the hook re-rendering after geo resolves.
if (typeof window !== "undefined") {
  import("@/hooks/use-currency").then(({ warmGeoDetect }) => warmGeoDetect());
}

// Client-side hydration — wait for i18n init so the default namespace
// ("common") is ready before first render, preventing key flashes.
if (typeof window !== "undefined") {
  import("./i18n").then(({ initPromise }) =>
    initPromise.then(() => {
      createRoot(document.getElementById("root")!).render(
        <HelmetProvider>
          <App />
        </HelmetProvider>
      );
    })
  );
}

// ─── SSR Prerender export ────────────────────────────────────────────────────
// Used by vite-prerender-plugin at build time. NOT executed in the browser.

interface HelmetContextFilled {
  helmet: {
    title: { toString(): string };
    meta: { toString(): string };
    link: { toString(): string };
  };
}

// All routes to prerender (static + blog articles)
const blogRoutes = blogPosts.map((post) => `/producer-blog/${post.slug}`);
const urBlogRoutes = blogPostsUr.map((post) => `/ur/producer-blog/${post.slug}`);
const frBlogRoutes = blogPostsFr.map((post) => `/fr/producer-blog/${post.slug}`);
// Spanish blog routes — reuse English slugs (same slugs, different locale prefix)
const esBlogRoutes = blogPosts.map((post) => `/es/producer-blog/${post.slug}`);
// German blog routes
const deBlogRoutes = blogPosts.map((post) => `/de/producer-blog/${post.slug}`);
const allRoutes = new Set([...staticRoutes, ...blogRoutes, ...urBlogRoutes, ...frBlogRoutes, ...esBlogRoutes, ...deBlogRoutes]);

/**
 * Map a route path to the i18n namespaces it needs.
 */
function getNamespacesForRoute(url: string): string[] {
  // Strip locale prefix to get the "bare" path
  const bare = url.replace(/^\/(ur|fr|es|de)(\/|$)/, "/").replace(/\/$/, "") || "/";

  const map: Record<string, string[]> = {
    "/": ["common", "home"],
    "/script": ["common", "script"],
    "/pricing": ["common", "pricing"],
    "/about-us": ["common", "about"],
    "/brand": ["common", "brand"],
    "/culture": ["common", "culture"],
    "/privacy": ["common", "privacy"],
    "/terms-of-use": ["common", "terms"],
    "/indie-filmmaking-software": ["common", "indie"],
    "/film-budgeting-software": ["common", "budget"],
    "/film-preproduction-planning": ["common", "planning"],
    "/studio-pro-software": ["common", "studio-pro"],
    "/storyboard-software": ["common", "storyboard"],
    "/scene-breakdown-software": ["common", "scene-breakdown"],
    "/film-collaboration-software": ["common", "collaboration"],
    "/production-task-management": ["common", "task-management"],
    "/film-file-sharing-storage": ["common", "file-sharing"],
    "/film-project-management": ["common", "project-management"],
    "/knowledge-base": ["common", "knowledge-base"],
  };

  // Exact match
  if (map[bare]) return map[bare];

  // Prefix matches (knowledge-base articles, blog, solutions pages)
  if (bare.startsWith("/knowledge-base/")) return ["common", "knowledge-base"];
  if (bare.startsWith("/producer-blog")) return ["common", "blog"];

  // Solutions pages — each has its own namespace for performance
  const solutionMap: Record<string, string> = {
    "/film-schools-software": "solutions-schools",
    "/software-for-directors-producers": "solutions-directors",
    "/documentary-filmmaking-software": "solutions-documentary",
    "/software-for-cinematographers": "solutions-cinematographers",
    "/creative-agency-production-software": "solutions-agencies",
    "/film-production-team-software": "solutions-teams",
    "/screenwriting-software": "solutions-screenwriters",
    "/tv-series-production-software": "solutions-tv-series",
    "/film-investment-software": "solutions-investors",
    "/software-for-production-managers": "solutions-prod-managers",
    "/empowering-filmmaking": "solutions-empowering",
    "/indie-filmmakers": "solutions-indie-filmmakers",
  };
  for (const [slug, ns] of Object.entries(solutionMap)) {
    if (bare.startsWith(slug)) return ["common", ns];
  }

  // Default fallback
  return ["common", "home"];
}

export async function prerender(data: { url: string }) {
  const { renderToString } = await import("react-dom/server");
  const { StaticRouter } = await import("react-router-dom/server");
  const { HelmetProvider: HP } = await import("react-helmet-async");
  const { QueryClient, QueryClientProvider } = await import("@tanstack/react-query");
  const { I18nextProvider } = await import("react-i18next");
  const { initI18nForSSR } = await import("./i18n");

  const url = data.url ?? "/";

  // Detect locale and load translations before render
  const locale = url.startsWith("/ur/") || url === "/ur" ? "ur" : url.startsWith("/fr/") || url === "/fr" ? "fr" : url.startsWith("/es/") || url === "/es" ? "es" : url.startsWith("/de/") || url === "/de" ? "de" : "en";
  const namespaces = getNamespacesForRoute(url);
  const i18nInstance = await initI18nForSSR(locale, namespaces);

  const helmetContext: Record<string, unknown> = {};
  const queryClient = new QueryClient();

  const html = renderToString(
    <QueryClientProvider client={queryClient}>
      <HP context={helmetContext}>
        <I18nextProvider i18n={i18nInstance}>
          <StaticRouter location={url}>
            <AppRoutes />
          </StaticRouter>
        </I18nextProvider>
      </HP>
    </QueryClientProvider>
  );

  const { helmet } = helmetContext as unknown as HelmetContextFilled;

  const headElements = new Set<{ type: string; props: Record<string, string> }>();

  // Title
  const titleMatch = helmet?.title?.toString().match(/<title[^>]*>(.*?)<\/title>/);
  const title = titleMatch?.[1] ?? "Pzaz – Film Production Software for Indie Filmmakers";

  // Meta description
  const descMatch = helmet?.meta
    ?.toString()
    .match(/<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*\/?>/);
  if (descMatch) {
    headElements.add({ type: "meta", props: { name: "description", content: descMatch[1] } });
  }

  // Canonical
  const canonicalMatch = helmet?.link
    ?.toString()
    .match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"[^>]*\/?>/);
  if (canonicalMatch) {
    headElements.add({ type: "link", props: { rel: "canonical", href: canonicalMatch[1] } });
  }

  // OG tags
  const ogTitleMatch = helmet?.meta?.toString().match(/<meta[^>]*property="og:title"[^>]*content="([^"]*)"[^>]*\/?>/);
  if (ogTitleMatch) {
    headElements.add({ type: "meta", props: { property: "og:title", content: ogTitleMatch[1] } });
  }
  const ogDescMatch = helmet?.meta?.toString().match(/<meta[^>]*property="og:description"[^>]*content="([^"]*)"[^>]*\/?>/);
  if (ogDescMatch) {
    headElements.add({ type: "meta", props: { property: "og:description", content: ogDescMatch[1] } });
  }
  const ogImageMatch = helmet?.meta?.toString().match(/<meta[^>]*property="og:image"[^>]*content="([^"]*)"[^>]*\/?>/);
  if (ogImageMatch) {
    headElements.add({ type: "meta", props: { property: "og:image", content: ogImageMatch[1] } });
  }
  const ogUrlMatch = helmet?.meta?.toString().match(/<meta[^>]*property="og:url"[^>]*content="([^"]*)"[^>]*\/?>/);
  if (ogUrlMatch) {
    headElements.add({ type: "meta", props: { property: "og:url", content: ogUrlMatch[1] } });
  }

  // Twitter tags
  const twCardMatch = helmet?.meta?.toString().match(/<meta[^>]*name="twitter:card"[^>]*content="([^"]*)"[^>]*\/?>/);
  if (twCardMatch) {
    headElements.add({ type: "meta", props: { name: "twitter:card", content: twCardMatch[1] } });
  }
  const twTitleMatch = helmet?.meta?.toString().match(/<meta[^>]*name="twitter:title"[^>]*content="([^"]*)"[^>]*\/?>/);
  if (twTitleMatch) {
    headElements.add({ type: "meta", props: { name: "twitter:title", content: twTitleMatch[1] } });
  }
  const twDescMatch = helmet?.meta?.toString().match(/<meta[^>]*name="twitter:description"[^>]*content="([^"]*)"[^>]*\/?>/);
  if (twDescMatch) {
    headElements.add({ type: "meta", props: { name: "twitter:description", content: twDescMatch[1] } });
  }
  const twImageMatch = helmet?.meta?.toString().match(/<meta[^>]*name="twitter:image"[^>]*content="([^"]*)"[^>]*\/?>/);
  if (twImageMatch) {
    headElements.add({ type: "meta", props: { name: "twitter:image", content: twImageMatch[1] } });
  }

  return {
    html,
    // Return all routes as links so the plugin queues a separate prerender(data)
    // call for each one with the correct data.url — this is more reliable than
    // additionalPrerenderRoutes which can sometimes reuse the same HTML output.
    links: allRoutes,
    head: {
      title,
      elements: headElements,
    },
  };
}
