
## Research Summary

### The four options compared:

**1. `vite-plugin-prerender` (v1.0.8 — published 4 years ago)**
- Uses Puppeteer (headless Chrome) to actually *run* the built app and screenshot each route's DOM
- Inspired by the old `prerender-spa-plugin` for webpack
- Last published 4 years ago — likely incompatible with modern Vite (v5) and Node v22
- Requires Puppeteer as a dependency (heavy ~300MB download, Chromium binary)
- Zero dependents — abandoned
- **Verdict: Avoid.** Abandoned, heavy, and unlikely to work with the current stack.

---

**2. `vite-plugin-html-prerender` (v0.2.0 — published 2 years ago)**
- Also browser-based (uses a headless browser to render the SPA)
- Very thin wrapper — only 3 dependencies, very minimal API
- Last published 2 years ago, 0 dependents
- No mention of framework support, no TypeScript examples
- **Verdict: Avoid.** Too minimal, abandoned, no community.

---

**3. `vike` (v0.4.255 — published 11 days ago, 531 versions)**
- Formerly `vite-plugin-ssr` — a full meta-framework on top of Vite
- Actively maintained (published 11 days ago), large ecosystem
- Supports React, Vue, Solid, etc.
- Requires restructuring the project: pages go in a `/pages` directory, routing is file-based, layouts are defined differently
- This is essentially "Framework Mode" — it replaces react-router-dom with its own routing system
- **Critical constraint from memory**: "migrations to Framework Mode are strictly avoided as they break the build and preview infrastructure"
- **Verdict: Avoid.** Too invasive — it's a full framework migration, not a plugin. Breaks the Lovable build pipeline.

---

**4. `vite-prerender-plugin` (v0.5.12 — published 6 months ago, by Preact team)**
- Created and maintained by the **Preact team** (preactjs org on GitHub)
- Works with *any* framework — React, Preact, Vue, etc.
- **Does not use a headless browser** — uses `renderToString` / server-side rendering directly, so it's fast and has no Chromium dependency
- You export a `prerender()` function from a script; the plugin calls it during the build
- Stays within a standard Vite SPA structure — no framework mode changes
- Supports per-route `<head>` injection (title, meta tags, og:image) from within the prerender function
- Active maintenance, clean TypeScript API
- Can automatically crawl links to discover routes (`links: new Set([...])`)
- **Verdict: Best choice.** Maintained, framework-agnostic, no headless browser, fits the existing Vite SPA architecture.

---

## Recommendation: `vite-prerender-plugin`

It's the only option that:
1. Is actively maintained (Preact team, 6 months ago, 20 versions)
2. Works without a headless browser (uses renderToString — no Puppeteer/Chromium)
3. Stays a Vite plugin — no framework restructuring required
4. Supports React explicitly
5. Handles per-route meta tags (title, description, og:image) from within the prerender function
6. Won't break the Lovable build pipeline (no framework mode)

## How it would integrate with this project

The existing `vite.config.ts` already has:
- `staticRoutes` array — all routes to prerender
- `sitemapPlugin` — generates sitemap (kept as-is)

Integration plan:
1. Install `vite-prerender-plugin`
2. Create `src/prerender.tsx` — exports a `prerender(data: { url: string })` function that uses `renderToString` + `StaticRouter` + per-route SEO metadata
3. Add `vitePrerenderPlugin({ prerenderScript: '...' })` to `vite.config.ts` plugins
4. Remove the manual `prerenderMetaPlugin` (no longer needed — the prerender function handles head tags)
5. Keep `sitemapPlugin` as-is
6. Keep `AppRoutes` export from `App.tsx` for use in prerender script

The `prerender()` function would return:
```ts
{
  html,              // renderToString output
  head: {
    title: "...",
    elements: new Set([
      { type: 'meta', props: { name: 'description', content: '...' } },
      { type: 'meta', props: { property: 'og:title', content: '...' } },
    ])
  }
}
```

This is clean, automatic (React components render for real), and fits the architecture perfectly.
