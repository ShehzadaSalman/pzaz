
## Implement SSG Pre-rendering and SEO Meta Tags

This plan adds static HTML generation at build time and dynamic per-page meta tags for SEO and social sharing.

---

### Step 1: Install dependencies

Add two new packages:
- `react-helmet-async` -- manages `<head>` tags per page
- `vite-plugin-prerender` -- generates static HTML for each route at build time using Puppeteer

### Step 2: Create reusable `<SEO>` component

New file: `src/components/SEO.tsx`

A component accepting `title`, `description`, `image`, `url`, and `type` props. It renders a `<Helmet>` block with:
- `<title>`
- `<meta name="description">`
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`)
- Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`)

Defaults will use Pzaz branding.

### Step 3: Wrap app in `HelmetProvider`

Update `src/main.tsx` to wrap `<App />` with `<HelmetProvider>` from `react-helmet-async`.

### Step 4: Add `<SEO>` to every page

| Page | Title | Description source |
|---|---|---|
| Index (`/`) | Pzaz -- Film Production Software | Marketing copy |
| Script (`/script`) | Pzaz Script -- AI Screenwriting | Script page copy |
| Pricing (`/pricing`) | Pricing -- Pzaz | Pricing copy |
| Producer Blog (`/producer-blog`) | Producer Blog -- Pzaz | Blog listing copy |
| Blog Article (`/producer-blog/:slug`) | `{article.title} \| Pzaz` | `article.excerpt` + `article.featuredImage` |
| Not Found | 404 -- Page Not Found | Generic |

### Step 5: Fix `index.html` fallback meta tags

Replace the placeholder text ("Lovable App", " Generat") with proper Pzaz branding defaults.

### Step 6: Configure `vite-plugin-prerender` in `vite.config.ts`

Add the plugin for production builds only. It will:
- Import `blogPosts` from the data file to dynamically build all `/producer-blog/:slug` routes
- Pre-render: `/`, `/script`, `/pricing`, `/producer-blog`, and all blog article routes

### Step 7: Update `robots.txt` and generate `sitemap.xml`

- Add a `Sitemap:` directive to `public/robots.txt`
- Add a small Vite plugin or postProcess hook that writes `sitemap.xml` into `dist/` listing all pre-rendered URLs

---

### Files created or modified

| File | Action |
|---|---|
| `package.json` | Add `react-helmet-async`, `vite-plugin-prerender` |
| `src/components/SEO.tsx` | **New** -- reusable SEO component |
| `src/main.tsx` | Wrap in `HelmetProvider` |
| `vite.config.ts` | Add pre-render plugin (production only) |
| `index.html` | Fix default meta tags |
| `public/robots.txt` | Add Sitemap directive |
| `src/pages/Index.tsx` | Add `<SEO>` |
| `src/pages/Script.tsx` | Add `<SEO>` |
| `src/pages/Pricing.tsx` | Add `<SEO>` |
| `src/pages/ProducerBlog.tsx` | Add `<SEO>` |
| `src/pages/BlogArticle.tsx` | Add `<SEO>` with dynamic article data |
| `src/pages/NotFound.tsx` | Add `<SEO>` |
