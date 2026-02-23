

## Fix Blog Detail SEO for Google Crawling

### The Problem

This is a client-side rendered React SPA. When Googlebot visits a blog article URL, it receives an empty HTML shell. All meta tags, structured data, and article content are injected only after JavaScript runs. Google can execute JS, but it queues pages for rendering, which delays indexing and can miss dynamic content entirely.

### Solution: Pre-render all blog pages at build time

We will use `vite-plugin-prerender` to generate static HTML files for every blog route during the build step. This means Googlebot (and social media bots) will receive fully-formed HTML with all meta tags, JSON-LD, and article content baked in -- no JavaScript execution needed.

---

### Step 1: Install `vite-plugin-prerender`

Add the package which uses Puppeteer at build time to visit each route and save the rendered HTML.

### Step 2: Inline article content for pre-rendering

The pre-renderer needs the article content available synchronously (or at least during the initial render). We will:
- In `BlogArticle.tsx`, import `blogDataFull` content directly (not lazily) when building for production, so the pre-renderer captures the full article text
- Keep the lazy-loading behavior for client-side navigation in development/runtime for performance

Approach: Import `blogDataFull` statically and look up the content at render time. The full data file will be code-split by Vite for the client, but the pre-renderer will capture the fully rendered HTML regardless.

### Step 3: Configure `vite-plugin-prerender` in `vite.config.ts`

- Add the plugin for production builds only
- Use the existing `allRoutes` array (which already collects all blog slugs) as the list of routes to pre-render
- Configure it to wait for the page to be fully rendered before snapshotting

### Step 4: Fix sitemap URL

Change `SITE_URL` in `vite.config.ts` from `https://pzaz-sparkle-showcase.lovable.app` to `https://pzaz.io` so the sitemap references the correct canonical domain.

### Step 5: Add `<noscript>` fallback in `index.html`

Add a basic `<noscript>` message so crawlers that don't execute JS see something meaningful.

---

### Files modified

| File | Change |
|---|---|
| `package.json` | Add `vite-plugin-prerender` |
| `vite.config.ts` | Add pre-render plugin config for production; fix `SITE_URL` to `https://pzaz.io` |
| `src/pages/BlogArticle.tsx` | Import full blog content statically so pre-renderer captures article text |
| `src/data/blogData.ts` | Export a synchronous content lookup alongside the async one |
| `index.html` | Add `<noscript>` tag |

### Result

After build, the `dist/` folder will contain a static HTML file for every blog article (e.g., `dist/producer-blog/best-film-screenwriting-software-usa/index.html`) with:
- Correct `<title>`, `<meta>` OG/Twitter tags in the HTML
- JSON-LD structured data in the HTML
- Full article content in the HTML
- Proper canonical URLs

Google will index these pages immediately without needing to execute JavaScript.

