

## Add German (Deutsch) Language

### Overview
Follow the exact same pattern used for Spanish. German is LTR like French/Spanish, so no RTL concerns. The work mirrors what was done for `es` — infrastructure wiring, 34 translation JSON files, data files, route registration, and pre-rendering.

---

### Phase 1: Infrastructure Wiring (~8 files)

1. **`src/hooks/use-locale.ts`** — Add `"de"` to `SUPPORTED_LOCALES`; update regex `/^\/(ur|fr|es)/` → `/^\/(ur|fr|es|de)/`
2. **`src/components/LocaleWrapper.tsx`** — No change needed (already dynamic from `SUPPORTED_LOCALES`)
3. **`src/components/LanguageDropdown.tsx`** — Add `de: "Deutsch"` to `languageLabels`
4. **`src/i18n.ts`** — Add `"de"` to `getInitialLang()` detection
5. **`index.html`** — Add `"de"` to the synchronous lang/dir snippet
6. **`src/App.tsx`** — Add `<Route path="de">` block mirroring the `es` block with all child routes
7. **`src/routes.ts`** — Add `/de` route block (~90 lines) for pre-rendering
8. **`src/main.tsx`** — Add `"de"` to the locale loop in `getNamespacesForRoute()`

---

### Phase 2: Translation Files (~34 JSON files in `src/locales/de/`)

Create all files matching the Spanish locale directory:

`common.json`, `home.json`, `script.json`, `pricing.json`, `about.json`, `blog.json`, `brand.json`, `budget.json`, `collaboration.json`, `culture.json`, `file-sharing.json`, `indie.json`, `knowledge-base.json`, `planning.json`, `privacy.json`, `project-management.json`, `scene-breakdown.json`, `storyboard.json`, `studio-pro.json`, `task-management.json`, `terms.json`, `vs-final-draft.json`, plus 12 `solutions-*.json` files.

All translated from English into proper German with professional film industry terminology.

---

### Phase 3: Data Files (~3 files)

1. **`src/data/knowledgeBaseDataDe.ts`** — Translate all 34 KB articles (titles, descriptions, body)
2. **`src/data/blogDataDe.ts`** — Translate 49 blog post metadata (titles, excerpts)
3. **`src/data/blogContentDe.ts`** — Translate full body content for all 49 blog articles

Update `KnowledgeBase.tsx`, `KnowledgeBaseArticle.tsx`, `BlogArticle.tsx`, and related components to include `de` in their locale selection logic.

---

### Phase 4: Pre-rendering

All `/de/` routes will be statically rendered to HTML via the existing SSG pipeline — no additional config beyond adding routes to `routes.ts`.

---

### Estimated Scope
- ~8 infrastructure file edits
- ~34 new translation JSON files in `src/locales/de/`
- ~3 new data files (blog + KB)
- ~90 new route entries in `routes.ts`
- ~50 new route entries in `App.tsx`

### Execution Order
1. Infrastructure wiring (all 8 files)
2. Core page translations (common, home, script, pricing, about)
3. Product + feature page translations
4. Solution page translations (12 split namespace files)
5. Remaining pages (brand, culture, privacy, terms, vs-final-draft)
6. KB data + blog data + blog content
7. Component updates for `de` locale selection

