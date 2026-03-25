
## URL-Based Locale Routing for i18n

**Goal:** Add locale-prefixed URLs so language is encoded in the path — e.g. `/ur/` for Urdu, `/` stays English (default). This works alongside the i18n system that was planned (react-i18next + JSON locale files) and must be compatible with the SSG prerender pipeline.

**URL structure:**
```
/           → English (default, no prefix)
/ur/        → Urdu homepage
/ur/script  → Urdu script page (future)
```

---

### How it works

A new `LocaleWrapper` component reads the `:locale` param from the URL, calls `i18n.changeLanguage()`, sets `document.dir`, and renders the page. The existing routes are duplicated under a `/:locale/*` parent route. When no locale prefix exists, English is used.

A `useLocale` hook provides the current locale and a `navigateToLocale()` helper so the `LanguageDropdown` can switch language by navigating to the prefixed URL instead of just changing state.

---

### Files to create

**1. `src/i18n.ts`** — Initialize i18next with `en` + `ur` resources (same as planned)

**2. `src/locales/en.json`** — English homepage strings

**3. `src/locales/ur.json`** — Urdu translations (RTL)

**4. `src/hooks/use-locale.ts`**
```ts
// Returns { locale, navigateToLocale }
// Reads :locale param or defaults to "en"
```

**5. `src/components/LocaleWrapper.tsx`**
```tsx
// Reads :locale from URL params
// Calls i18n.changeLanguage(locale) + sets dir on <html>
// Renders <Outlet /> so child routes work normally
```

---

### Files to modify

**6. `src/App.tsx`**
- Wrap all existing routes inside a `/:locale?` parent route using `LocaleWrapper`
- Add `<Route path="/:locale" element={<LocaleWrapper />}>` wrapping all page routes
- The `path="/"` root (English default) stays as-is outside the locale prefix

Route structure:
```
<Route element={<LocaleWrapper />}>           ← no locale = "en"
  <Route path="/" element={<Index />} />
  ...all other routes...
</Route>

<Route path="/:locale" element={<LocaleWrapper />}>
  <Route index element={<Index />} />
  <Route path="script" element={<Script />} />
  ...mirror of all routes without leading slash...
</Route>
```

**7. `src/components/LanguageDropdown.tsx`**
- Import `useLocale` hook
- On language select: call `navigateToLocale(code)` which navigates to `/ur/` (or `/` for English)
- Reflect active locale from URL (not local state)

**8. `src/routes.ts`**
- Add `/ur` and all `/ur/*` homepage route equivalents to `staticRoutes` for SSG prerender

**9. `src/main.tsx`**
- Import `./i18n` at top so translations load before first render
- Extend `allRoutes` to include `/ur` prefixed versions of homepage routes for prerendering

**10. Homepage components** (`Hero.tsx`, `ProblemSection.tsx`, `SolutionSection.tsx`, `AIContextSection.tsx`, `ProductsSection.tsx`, `IntegrationsSection.tsx`, `SharedCTA.tsx`)
- Replace hardcoded strings with `t()` calls

---

### SSG / Prerender compatibility

The `prerender()` function in `main.tsx` runs with `StaticRouter`. `LocaleWrapper` will detect the locale from the URL path during SSR so each `/ur/*` route prerenders with Urdu content and `dir="rtl"` set correctly in the rendered HTML.

Only `/ur/` (the homepage) is added to the prerender list initially. Other `/ur/*` pages are client-rendered until translations are added to those pages.

---

### What is NOT in scope
- URL-based locale for non-homepage pages (they fall back to English until `t()` calls are added)
- fr/de/es URL prefixes (kept as stubs)
- hreflang tags (can be added later via SEO component)
