import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

const SITE_URL = "https://pzaz.io";

function sitemapPlugin(routes: string[]): Plugin {
  return {
    name: "generate-sitemap",
    closeBundle() {
      const urls = routes
        .map(
          (r) =>
            `  <url><loc>${SITE_URL}${r}</loc><changefreq>weekly</changefreq></url>`
        )
        .join("\n");
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
      const distDir = path.resolve(__dirname, "dist");
      if (fs.existsSync(distDir)) {
        fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);
      }
    },
  };
}

interface RouteSEO {
  path: string;
  title: string;
  description: string;
  image?: string;
  canonical?: string;
}

/**
 * Generates a static index.html per route with correct <title>, OG, and Twitter meta tags
 * so that crawlers and social-sharing bots receive proper metadata without executing JS.
 */
function prerenderMetaPlugin(routes: RouteSEO[]): Plugin {
  return {
    name: "prerender-meta-tags",
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const templatePath = path.join(distDir, "index.html");
      if (!fs.existsSync(templatePath)) return;

      const template = fs.readFileSync(templatePath, "utf-8");

      for (const route of routes) {
        const html = template
          .replace(
            /<title>[^<]*<\/title>/,
            `<title>${route.title}</title>`
          )
          .replace(
            /<meta name="description" content="[^"]*" \/>/,
            `<meta name="description" content="${route.description}" />`
          )
          .replace(
            /<link rel="canonical" href="[^"]*" \/>/,
            `<link rel="canonical" href="${route.canonical || `${SITE_URL}${route.path}/`}" />`
          )
          .replace(
            /<meta property="og:title" content="[^"]*" \/>/,
            `<meta property="og:title" content="${route.title}" />`
          )
          .replace(
            /<meta property="og:description" content="[^"]*" \/>/,
            `<meta property="og:description" content="${route.description}" />`
          )
          .replace(
            /<meta property="og:image" content="[^"]*" \/>/,
            `<meta property="og:image" content="${route.image || `${SITE_URL}/og-image.png`}" />`
          )
          .replace(
            /<meta name="twitter:image" content="[^"]*" \/>/,
            `<meta name="twitter:image" content="${route.image || `${SITE_URL}/og-image.png`}" />`
          );

        // Write to dist/<route>/index.html
        const routeDir = path.join(distDir, route.path);
        fs.mkdirSync(routeDir, { recursive: true });
        fs.writeFileSync(path.join(routeDir, "index.html"), html);
      }
    },
  };
}

// Static route list
const staticRoutes = [
  "/",
  "/script",
  "/pricing",
  "/producer-blog",
  "/imagine",
  "/collaborate",
  "/breakdown",
  "/about-us",
  "/pzaz-vs-final-draft",
  "/sales-team",
  "/brand",
  "/culture",
  "/privacy",
  "/terms",
];

// Static pages with SEO metadata for pre-rendering
const staticSEORoutes: RouteSEO[] = [
  {
    path: "/",
    title: "Pzaz – Film Production Software",
    description: "Pzaz is the all-in-one film production platform for indie filmmakers. Manage scripts, budgets, schedules, and crew — powered by AI.",
  },
  {
    path: "/script",
    title: "Script – AI-Powered Screenwriting | Pzaz",
    description: "Write, format, and collaborate on scripts with Pzaz's AI-powered screenwriting tool. Industry-standard formatting, real-time collaboration, and more.",
  },
  {
    path: "/pricing",
    title: "Pricing – Plans for Every Filmmaker | Pzaz",
    description: "Flexible pricing plans for indie filmmakers and production teams. Start for free — no credit card required.",
  },
  {
    path: "/producer-blog",
    title: "Producer Blog – Filmmaking Insights | Pzaz",
    description: "Tips, guides, and insights for indie filmmakers and producers. Explore the Pzaz Producer Blog.",
  },
  {
    path: "/imagine",
    title: "Imagine – Moodboarding & Visual Planning | Pzaz",
    description: "Build stunning moodboards and visual references for your film. Pzaz's Imagine tool brings your creative vision to life.",
  },
  {
    path: "/collaborate",
    title: "Collaborate – Real-Time Film Production Teamwork | Pzaz",
    description: "Work with your entire production team in real time. Pzaz's collaboration tools keep scripts, schedules, and shot lists in sync.",
  },
  {
    path: "/breakdown",
    title: "Breakdown – Scene & Production Breakdown | Pzaz",
    description: "Break down your script into production-ready scene lists, shot lists, and schedules — all inside Pzaz.",
  },
  {
    path: "/about-us",
    title: "About Us – The Story Behind Pzaz",
    description: "Learn about the team and mission behind Pzaz — the all-in-one film production platform built for indie filmmakers.",
  },
  {
    path: "/pzaz-vs-final-draft",
    title: "Pzaz vs. Final Draft – The Complete Film Production Hub",
    description: "See how Pzaz outperforms Final Draft with end-to-end production tools: storyboarding, scheduling, real-time collaboration, AI writing, and more.",
  },
  {
    path: "/sales-team",
    title: "Sales Team – Work With Pzaz | Pzaz",
    description: "Connect with the Pzaz sales team to find the right plan for your production company or film school.",
  },
  {
    path: "/brand",
    title: "Brand Assets – Pzaz Media Kit",
    description: "Download official Pzaz logos, brand colours, and media assets for press and partner use.",
  },
  {
    path: "/culture",
    title: "Culture – Life at Pzaz",
    description: "Discover the values, principles, and culture that drive the team at Pzaz.",
  },
  {
    path: "/privacy",
    title: "Privacy Policy | Pzaz",
    description: "Read the Pzaz privacy policy to understand how we collect, use, and protect your data.",
  },
  {
    path: "/terms",
    title: "Terms of Use | Pzaz",
    description: "Review the Pzaz terms of use governing your access to and use of the platform.",
  },
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Dynamically collect blog slugs and SEO data
  let blogRoutes: string[] = [];
  let blogSEORoutes: RouteSEO[] = [];
  try {
    const dataFileContent = fs.readFileSync(
      path.resolve(__dirname, "src/data/blogData.ts"),
      "utf-8"
    );
    const slugMatches = dataFileContent.matchAll(/slug:\s*"([^"]+)"/g);
    for (const m of slugMatches) {
      const slug = m[1];
      const routePath = `/producer-blog/${slug}`;
      blogRoutes.push(routePath);

      // Extract SEO fields via regex from the data file
      const postBlock = dataFileContent.match(
        new RegExp(`slug:\\s*"${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?(?=\\{\\s*id:|$)`)
      )?.[0] || "";

      const seoTitle = postBlock.match(/seo:\s*\{[^}]*?title:\s*"([^"]+)"/)?.[1];
      const seoDesc = postBlock.match(/seo:\s*\{[^}]*?description:\s*"([^"]+)"/)?.[1];
      const seoOgImage = postBlock.match(/seo:\s*\{[^}]*?ogImage:\s*"([^"]+)"/)?.[1];
      const featuredImage = postBlock.match(/featuredImage:\s*"([^"]+)"/)?.[1];
      const title = postBlock.match(/title:\s*"([^"]+)"/)?.[1];
      const excerpt = postBlock.match(/excerpt:\s*"([^"]+)"/)?.[1];
      const canonical = postBlock.match(/canonical:\s*"([^"]+)"/)?.[1];

      blogSEORoutes.push({
        path: routePath,
        title: seoTitle || (title ? `${title} | Pzaz` : "Pzaz – Film Production Software"),
        description: seoDesc || excerpt || "Pzaz is the all-in-one film production platform for indie filmmakers.",
        image: seoOgImage || (featuredImage !== "/placeholder.svg" ? featuredImage : undefined),
        canonical,
      });
    }
  } catch {
    // fallback: no blog routes
  }

  const allRoutes = [...staticRoutes, ...blogRoutes];
  const allSEORoutes = [...staticSEORoutes, ...blogSEORoutes];

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      mode === "production" && sitemapPlugin(allRoutes),
      mode === "production" && prerenderMetaPlugin(allSEORoutes),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
