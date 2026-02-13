

# Pre-rendering and SEO Implementation Plan

## Overview
Generate static HTML at build time for every route so search engines see full page content instead of an empty `<div id="root"></div>`.

## Steps

### 1. Install Dependencies
- `react-helmet-async` -- per-page meta tags
- `vite-plugin-prerender` -- static HTML generation at build time

### 2. Update `index.html`
Replace generic "Lovable App" metadata with Pzaz branding as the default fallback:
- Title: "Pzaz | Film Production Management Software"
- Description, Open Graph, and Twitter card tags updated to Pzaz content

### 3. Wrap App with HelmetProvider (`src/App.tsx`)
Add `HelmetProvider` from `react-helmet-async` around the app so per-page `<Helmet>` blocks work.

### 4. Add `<Helmet>` to Each Page
Each page gets unique title, description, and OG tags:

| Page | Title |
|------|-------|
| Index | Pzaz -- Film Production Management Software |
| Script | Script Writing Tool -- Pzaz |
| Pricing | Pricing -- Pzaz |
| Blog | Blog -- Pzaz |
| BlogArticle | (dynamic from article data) |

### 5. Configure Pre-rendering (`vite.config.ts`)
Add `vite-plugin-prerender` to the Vite plugins (production only) with all routes:
- `/`, `/script`, `/pricing`, `/blog`
- All 6 blog article slugs from `blogData.ts`

The plugin uses Puppeteer at build time to render each route and save the output as static HTML.

### 6. Create `public/sitemap.xml`
List all routes with `<lastmod>` dates so search engines can discover every page.

## Files Modified
- `index.html` -- update meta tags
- `src/App.tsx` -- add HelmetProvider
- `src/pages/Index.tsx` -- add Helmet block
- `src/pages/Script.tsx` -- add Helmet block
- `src/pages/Pricing.tsx` -- add Helmet block
- `src/pages/Blog.tsx` -- add Helmet block
- `src/pages/BlogArticle.tsx` -- add Helmet block with dynamic data
- `vite.config.ts` -- add pre-render plugin

## Files Created
- `public/sitemap.xml`

## Result
After build, each route has a fully rendered HTML file. Search engines see real content, proper titles, and descriptions. Users still get the fast SPA experience with React hydration.

