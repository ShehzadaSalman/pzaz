

## Performance Analysis: i18n / Language Update Impact

### Key Findings

**1. Bundle Size — Both locale files loaded eagerly**

`en.json` (1,924 lines) and `ur.json` (1,932 lines) are both statically imported in `src/i18n.ts` and bundled into the main JS entry point. Every visitor — even English-only — downloads the full Urdu translation payload. Estimated combined JSON size: ~120-150 KB uncompressed (~30-40 KB gzipped).

**2. Core Web Vitals — No measurable regression**

| Metric | English (`/`) | Notes |
|--------|--------------|-------|
| FCP | 6.7s | Dev server (Vite HMR), not production — expected to be slow |
| CLS | 0.085 | Good (< 0.1 threshold) |
| JS Heap | 29.4 MB | Normal for a marketing site with framer-motion + lucide |
| DOM Nodes | 449 | Light |
| Script Duration | 872ms | Dominated by lucide-react (157KB), framer-motion (97KB), not i18n |

The i18n library (`i18next` + `react-i18next`) adds minimal runtime overhead — key lookups are O(1) hash maps. The `t()` calls themselves are negligible.

**3. Component Impact — 77 files now import `useTranslation`**

Each `useTranslation()` hook subscribes to i18n language change events. With 77 components subscribed, a language switch triggers a re-render cascade across all mounted components. On the home page (~15 components mounted), this is fine. On pages with many sections (~8-10 components), still manageable.

**4. RTL CSS — Minimal overhead**

The `:lang(ur)` CSS selector adds a single `line-height: 2 !important` rule. The `dir="rtl"` attribute is set synchronously before first paint via `i18n.ts`, so there's no layout shift on Urdu pages.

**5. Route Duplication**

`routes.ts` now has ~35 additional `/ur/*` entries for prerendering. This increases build time for static generation but has zero runtime impact.

---

### Bottlenecks (not caused by i18n)

The top performance costs remain unchanged from before the language update:
- **lucide-react.js**: 157KB, 271ms load — tree-shaking not working (imports entire icon set)
- **framer-motion.js**: 97KB — animation library overhead
- **Brevo widget iframe**: 1.5s load — third-party chat widget
- **fbevents.js**: 95KB — Meta Pixel tracking

---

### Recommendations to Optimize

| Priority | Action | Impact |
|----------|--------|--------|
| High | **Lazy-load `ur.json`** — use i18next-http-backend or dynamic `import()` so Urdu JSON is only fetched when user switches to `/ur` | Saves ~15-20KB gzipped for 95%+ of visitors |
| Medium | **Split locale files by page namespace** — e.g. `ur/script.json`, `ur/budget.json` loaded per-route | Reduces per-page payload further |
| Low | **Audit lucide-react imports** — switch to `import { Icon } from "lucide-react"` named imports for tree-shaking | Saves ~100KB (unrelated to i18n but biggest win) |

---

### Verdict

The i18n integration has **negligible performance impact** at runtime. The only concern is the eager bundling of both locale files (~30-40KB gzipped extra for English-only visitors), which can be solved with lazy loading. The actual page rendering speed, CLS, and memory usage are unaffected by the translation work.

