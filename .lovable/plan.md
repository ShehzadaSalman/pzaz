

## Add Spanish (Español) Language

### Overview
Follow the exact same pattern used for French and Urdu. Spanish is LTR like French, so no RTL concerns. The work is: infrastructure wiring (small), translation files (large), route registration + pre-rendering (medium).

---

### Phase 1: Infrastructure Wiring (~8 files)

1. **`src/hooks/use-locale.ts`** — Add `"es"` to `SUPPORTED_LOCALES`. Update regex `/(ur|fr)/` → `/(ur|fr|es)/` in two places.

2. **`src/i18n.ts`** — Add `"es"` detection in `getInitialLang()`.

3. **`src/components/LocaleWrapper.tsx`** — No changes needed (already generic via `SUPPORTED_LOCALES`).

4. **`src/components/LanguageDropdown.tsx`** — Add `es: "Español"` to `languageLabels`.

5. **`src/App.tsx`** — Add a `<Route path="/es" element={<LocaleWrapper />}>` block mirroring the `/fr` block with all sub-routes.

6. **`index.html`** — Update the synchronous lang/dir snippet to recognize `"es"` path segment.

7. **`src/main.tsx`** — Update locale detection regex to include `es`. Import Spanish blog data. Add Spanish blog routes to `allRoutes`.

8. **`vite.config.ts`** — Add Spanish blog routes to sitemap generation.

---

### Phase 2: Translation Files (23 files)

Create `src/locales/es/` directory with Spanish translations for all 23 namespaces, translated from the English originals:

`common.json`, `home.json`, `script.json`, `pricing.json`, `budget.json`, `planning.json`, `indie.json`, `storyboard.json`, `studio-pro.json`, `scene-breakdown.json`, `collaboration.json`, `file-sharing.json`, `task-management.json`, `project-management.json`, `solutions.json`, `about.json`, `blog.json`, `brand.json`, `culture.json`, `knowledge-base.json`, `privacy.json`, `terms.json`, `vs-final-draft.json`

---

### Phase 3: Blog & Knowledge Base Data

1. **`src/data/blogDataEs.ts`** — Translate all 49 blog post metadata (title, excerpt, content references) into Spanish.
2. **`src/data/blogContentEs.ts`** — Translate full blog article content into Spanish.
3. **`src/data/knowledgeBaseDataEs.ts`** — Translate all 34 KB articles into Spanish.
4. Update blog/KB page components to import and use Spanish data when `locale === "es"`.

---

### Phase 4: Route Registration & Pre-rendering

1. **`src/routes.ts`** — Add all `/es/` routes (main pages + 34 KB articles), mirroring the `/fr/` block.
2. Spanish blog routes (49 articles) are generated dynamically in `main.tsx` from `blogDataEs`.
3. Sitemap in `vite.config.ts` picks them up automatically.

---

### Execution Order
1. Infrastructure wiring first (so `/es/` routes work with English fallback)
2. `common.json` + `home.json` (nav/footer/homepage in Spanish)
3. Product pages (script, budget, planning, storyboard, studio-pro, indie)
4. Feature pages (scene-breakdown, collaboration, file-sharing, task-management, project-management)
5. Remaining pages (solutions, pricing, about, brand, culture, privacy, terms, vs-final-draft)
6. Blog data + KB data last

### Estimated Scope
- ~8 infrastructure file edits
- ~23 new translation JSON files in `src/locales/es/`
- ~3 new data files (blog + KB)
- ~1 new route block in `routes.ts` (~90 lines)
- ~1 new route block in `App.tsx` (~50 lines)

