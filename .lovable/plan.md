

## Fix: Pre-render Urdu pages with actual translations (SSG approach)

### Problem

The `prerender()` function in `main.tsx` generates static HTML for all routes including `/ur/*`, but:
1. `getInitialLang()` returns `"en"` during SSR (no `window`)
2. `renderToString` is synchronous — can't resolve async `import()` for Urdu namespaces
3. Result: Urdu pages are pre-rendered with English fallbacks or raw keys

This means on hard refresh, users see the wrong content until React hydrates and i18next loads the correct translations client-side.

### Solution

Load the correct language and all required namespaces **before** calling `renderToString` in the `prerender()` function. This bakes the fully translated content into the static HTML for every route — zero flash, better SEO, faster perceived load.

### Changes

**1. `src/i18n.ts`** — Export a factory function for SSR
- Add an `initI18nForSSR(locale, namespaces)` function that creates a fresh i18next instance with all needed namespaces pre-loaded synchronously (using `await import()`)
- The existing client-side init stays unchanged

**2. `src/main.tsx` — `prerender()` function**
- Detect locale from `data.url` (if path starts with `/ur/`, locale = `"ur"`, else `"en"`)
- Determine which namespaces the route needs (map route patterns to namespace names)
- Call `initI18nForSSR(locale, namespaces)` and await it before `renderToString`
- Pass the initialized i18n instance via `I18nextProvider` in the SSR tree
- This ensures `renderToString` outputs fully translated HTML for every page

**3. Route-to-namespace mapping**
- Create a simple mapping: `/script` → `["common", "script"]`, `/pricing` → `["common", "pricing"]`, etc.
- Default to `["common", "home"]` for the index route
- This ensures only relevant namespaces are loaded per route during prerender

### What this achieves
- Every pre-rendered page (English and Urdu) contains fully translated content in the static HTML
- Zero translation key flash on hard refresh — content is already in the HTML before JS loads
- Better SEO for Urdu pages — search engines see actual Urdu text
- No need for client-side loaders or CSS hiding tricks
- Client-side hydration still works normally for navigation between pages

### Technical notes
- `renderToString` doesn't support Suspense, so all translations must be loaded before the call
- The `I18nextProvider` from `react-i18next` allows passing a custom i18n instance for SSR
- Bundle size is unaffected — translations are only loaded at build time, not shipped in the JS bundle
- The existing client-side `useSuspense: true` + `PageLoader` remains as a safety net for client-side navigation to new namespaces

