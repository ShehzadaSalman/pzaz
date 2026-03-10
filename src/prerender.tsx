import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRoutes } from "./App";

interface HelmetContextFilled {
  helmet: {
    title: { toString(): string };
    meta: { toString(): string };
    link: { toString(): string };
  };
}

export async function prerender(data: { url: string }) {
  const helmetContext: Record<string, unknown> = {};
  const queryClient = new QueryClient();

  const html = renderToString(
    <QueryClientProvider client={queryClient}>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={data.url}>
          <AppRoutes />
        </StaticRouter>
      </HelmetProvider>
    </QueryClientProvider>
  );

  const { helmet } = helmetContext as FilledContext;

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
  const canonicalMatch = helmet?.link?.toString().match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"[^>]*\/?>/);
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
    head: {
      title,
      elements: headElements,
    },
  };
}
