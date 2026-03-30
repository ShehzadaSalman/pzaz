import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { vitePrerenderPlugin } from "vite-prerender-plugin";
import fs from "fs";

const SITE_URL = "https://pzaz.io";

function sitemapPlugin(routes: string[]) {
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

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Read static routes from shared routes file
  let staticRoutes: string[] = [];
  try {
    const routesFile = fs.readFileSync(
      path.resolve(__dirname, "src/routes.ts"),
      "utf-8"
    );
    const routeMatches = [...routesFile.matchAll(/"(\/[^""]*)"/g)];
    staticRoutes = routeMatches.map((m) => m[1]);
  } catch {
    staticRoutes = ["/"];
  }

  // Blog routes for sitemap (all locales)
  let blogRoutes: string[] = [];
  try {
    const dataFileContent = fs.readFileSync(
      path.resolve(__dirname, "src/data/blogData.ts"),
      "utf-8"
    );
    const slugMatches = [...dataFileContent.matchAll(/slug:\s*"([^"]+)"/g)];
    const enBlogRoutes = slugMatches.map((m) => `/producer-blog/${m[1]}`);
    const urBlogRoutes = slugMatches.map((m) => `/ur/producer-blog/${m[1]}`);
    const frBlogRoutes = slugMatches.map((m) => `/fr/producer-blog/${m[1]}`);
    blogRoutes = [...enBlogRoutes, ...urBlogRoutes, ...frBlogRoutes];
  } catch {
    // fallback: no blog routes
  }

  const allRoutes = [...staticRoutes, ...blogRoutes];

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
      mode === "production" &&
        vitePrerenderPlugin({
          renderTarget: "#root",
          // Routes are returned as `links` from prerender() in main.tsx,
          // which ensures each route gets its own prerender(data) call with
          // the correct data.url. additionalPrerenderRoutes is intentionally
          // not used here as it can cause the same HTML to be reused.
        }),
      mode === "production" && sitemapPlugin(allRoutes),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
