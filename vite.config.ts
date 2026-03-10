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
  "/knowledge-base",
  "/pzaz-project",
  "/sell",
  "/shoot",
  "/visualise",
  "/write",
  "/indie",
  "/budget",
  "/planning",
  "/studio-pro",
  "/storyboard",
  "/scene-breakdown",
  "/collaboration-tools",
  "/task-management",
  "/file-sharing",
  "/project-management",
  // Knowledge Base – Getting Started
  "/knowledge-base/book-a-personalised-product-demonstration",
  "/knowledge-base/writing-your-script-with-pzaz",
  "/knowledge-base/ai-security-and-privacy-at-pzaz",
  "/knowledge-base/getting-started-with-workflows",
  "/knowledge-base/pzaz-101",
  // Knowledge Base – Functions
  "/knowledge-base/pzaz-security-features",
  "/knowledge-base/card-anatomy",
  "/knowledge-base/delete-your-account",
  "/knowledge-base/cancelling-or-closing-your-account",
  "/knowledge-base/your-pzaz-profile",
  "/knowledge-base/add-or-remove-blocks",
  "/knowledge-base/leave-feedback",
  "/knowledge-base/helpful-tools-for-capturing-screenshots-and-videos",
  "/knowledge-base/reporting-a-bug",
  "/knowledge-base/get-support",
  // Knowledge Base – Tools & Features
  "/knowledge-base/script-breakdown",
  "/knowledge-base/documents-section",
  "/knowledge-base/manage-section",
  "/knowledge-base/shots",
  "/knowledge-base/scenes",
  "/knowledge-base/storyboard",
  "/knowledge-base/stripboard",
  "/knowledge-base/call-sheets",
  "/knowledge-base/department",
  "/knowledge-base/moodboard",
  "/knowledge-base/team-chats",
  "/knowledge-base/file-sharing-media-storage",
  "/knowledge-base/budgeting",
  "/knowledge-base/board-views",
  "/knowledge-base/add-and-remove-team-members-filmspace",
  "/knowledge-base/roles-permissions-in-pzaz",
  "/knowledge-base/personal-to-dos",
  "/knowledge-base/card-blocks",
  "/knowledge-base/your-filmspace",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Blog routes for sitemap
  let blogRoutes: string[] = [];
  try {
    const dataFileContent = fs.readFileSync(
      path.resolve(__dirname, "src/data/blogData.ts"),
      "utf-8"
    );
    const slugMatches = [...dataFileContent.matchAll(/slug:\s*"([^"]+)"/g)];
    blogRoutes = slugMatches.map((m) => `/producer-blog/${m[1]}`);
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
      mode === "production" && sitemapPlugin(allRoutes),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
