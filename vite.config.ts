import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

const SITE_URL = "https://pzaz-sparkle-showcase.lovable.app";

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

// Static route list — blog slugs are added here so the sitemap covers them.
// vite-plugin-prerender (if configured) would use the same list.
const staticRoutes = ["/", "/script", "/pricing", "/producer-blog"];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Dynamically collect blog slugs for sitemap generation
  let blogRoutes: string[] = [];
  try {
    // Read the data file to extract slugs without importing TS at config time
    const dataFile = fs.readFileSync(
      path.resolve(__dirname, "src/data/blogData.ts"),
      "utf-8"
    );
    const slugMatches = dataFile.matchAll(/slug:\s*"([^"]+)"/g);
    for (const m of slugMatches) {
      blogRoutes.push(`/producer-blog/${m[1]}`);
    }
  } catch {
    // fallback: no blog routes in sitemap
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
      mode === "production" && sitemapPlugin(allRoutes),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
