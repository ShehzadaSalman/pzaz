// scripts/prerender.mjs
// Post-build SSR prerender script.
// Runs after: (1) vite build [client], (2) vite build --ssr [server]
// Renders every route with React renderToString and injects HTML into dist/*.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const ssrEntryPath = path.resolve(__dirname, "../dist-ssr/entry-server.js");
const templatePath = path.join(distDir, "index.html");

// ── Validation ────────────────────────────────────────────────────────────────
if (!fs.existsSync(templatePath)) {
  console.error("❌  dist/index.html not found. Run `vite build` first.");
  process.exit(1);
}
if (!fs.existsSync(ssrEntryPath)) {
  console.error(`❌  ${ssrEntryPath} not found. Run \`vite build --ssr src/entry-server.tsx --outDir dist-ssr\` first.`);
  process.exit(1);
}

// ── Load SSR render function ──────────────────────────────────────────────────
const { render } = await import(ssrEntryPath);

const template = fs.readFileSync(templatePath, "utf-8");

// ── Routes to prerender ───────────────────────────────────────────────────────
// Static routes
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

// Dynamically read blog slugs from blogData.ts
let blogRoutes = [];
try {
  const blogDataContent = fs.readFileSync(
    path.resolve(__dirname, "../src/data/blogData.ts"),
    "utf-8"
  );
  const slugMatches = [...blogDataContent.matchAll(/slug:\s*"([^"]+)"/g)];
  blogRoutes = slugMatches.map((m) => `/producer-blog/${m[1]}`);
} catch {
  console.warn("⚠️  Could not read blogData.ts — blog routes skipped.");
}

const allRoutes = [...staticRoutes, ...blogRoutes];

// ── Render each route ─────────────────────────────────────────────────────────
let rendered = 0;
let failed = 0;

for (const route of allRoutes) {
  try {
    const appHtml = render(route);

    // The meta tags are already set per-route by the prerenderMetaPlugin in vite.config.ts.
    // We just need to inject the React-rendered HTML into the root div.
    // Read the per-route file if it already exists (written by vite plugin), otherwise use template.
    const routeDir = route === "/" ? distDir : path.join(distDir, route);
    const routeIndexPath = path.join(routeDir, "index.html");
    const baseHtml = fs.existsSync(routeIndexPath)
      ? fs.readFileSync(routeIndexPath, "utf-8")
      : template;

    const html = baseHtml.replace(
      /<div id="root">(<\/div>|<article[\s\S]*?<\/article><\/div>)/,
      `<div id="root" data-ssr="true">${appHtml}</div>`
    );

    fs.mkdirSync(routeDir, { recursive: true });
    fs.writeFileSync(routeIndexPath, html);
    console.log(`✅  ${route}`);
    rendered++;
  } catch (err) {
    console.error(`❌  ${route}: ${err.message}`);
    failed++;
  }
}

console.log(`\nPrerender complete: ${rendered} rendered, ${failed} failed.`);
if (failed > 0) process.exit(1);
