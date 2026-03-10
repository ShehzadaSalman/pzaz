// scripts/prerender.mjs
// Post-build SSR prerender script.
// Usage: node scripts/prerender.mjs
// Must be run AFTER `vite build` (client) and `vite build --ssr` (server).

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const ssrDir = path.resolve(__dirname, "../dist-ssr");
const templatePath = path.join(distDir, "index.html");

if (!fs.existsSync(templatePath)) {
  console.error("❌  dist/index.html not found. Run `vite build` first.");
  process.exit(1);
}

if (!fs.existsSync(ssrDir)) {
  console.error("❌  dist-ssr/ not found. Run `vite build --ssr src/entry-server.tsx --outDir dist-ssr` first.");
  process.exit(1);
}

// Load the SSR entry module
const serverEntryPath = path.join(ssrDir, "entry-server.js");
if (!fs.existsSync(serverEntryPath)) {
  console.error("❌  dist-ssr/entry-server.js not found.");
  process.exit(1);
}

const { render } = await import(serverEntryPath);

const template = fs.readFileSync(templatePath, "utf-8");

// All routes to prerender — these must match vite.config.ts staticRoutes
const routes = [
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
];

let rendered = 0;
let failed = 0;

for (const route of routes) {
  try {
    const appHtml = render(route);

    // Inject rendered HTML into the root div
    const html = template.replace(
      /<div id="root"><\/div>/,
      `<div id="root" data-ssr="true">${appHtml}</div>`
    );

    const routeDir = route === "/" ? distDir : path.join(distDir, route);
    fs.mkdirSync(routeDir, { recursive: true });
    const outPath = path.join(routeDir, "index.html");
    fs.writeFileSync(outPath, html);
    console.log(`✅  ${route}`);
    rendered++;
  } catch (err) {
    console.error(`❌  ${route}:`, err.message);
    failed++;
  }
}

console.log(`\nDone: ${rendered} rendered, ${failed} failed.`);
if (failed > 0) process.exit(1);
