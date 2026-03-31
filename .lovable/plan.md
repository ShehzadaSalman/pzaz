

## Add Italian (Italiano) Language — Complete in One Session

### Scope
Mirror the exact pattern used for German (`de`). Italian is LTR, no RTL concerns. This involves infrastructure wiring (8 files), 34 translation JSON files, 3 data files, and locale registration.

---

### Phase 1: Infrastructure Wiring (8 files)

1. **`src/hooks/use-locale.ts`** — Add `"it"` to `SUPPORTED_LOCALES` array
2. **`src/i18n.ts`** — Add `"it"` to the `getInitialLang` ternary chain
3. **`index.html`** — Add `seg === 'it' ? 'it'` to the synchronous lang detection script
4. **`src/components/LanguageDropdown.tsx`** — Add `it: "Italiano"` to `languageLabels`
5. **`src/routes.ts`** — Add `"it"` to the `locales` array (line 106) and update the locale-strip regex
6. **`src/main.tsx`** — Add Italian blog routes (`itBlogRoutes`), include in `allRoutes`, update the bare-path regex `^\/(ur|fr|es|de|it)`
7. **`src/App.tsx`** — Add `it` locale route group (same pattern as `de`), update all locale-strip regexes
8. **`src/hooks/use-locale.ts`** — Update the regex in `navigateToLocale` from `/(ur|fr|es|de)/` to `/(ur|fr|es|de|it)/`

---

### Phase 2: Create 34 Italian Translation JSON Files

Create `src/locales/it/` directory with all 34 namespace files, translated from English to professional Italian using film industry terminology:

**Core (5 files):** `common.json`, `home.json`, `pricing.json`, `about.json`, `blog.json`

**Products (5 files):** `indie.json`, `planning.json`, `studio-pro.json`, `budget.json`, `storyboard.json`

**Features/Tools (6 files):** `script.json`, `scene-breakdown.json`, `collaboration.json`, `task-management.json`, `file-sharing.json`, `project-management.json`

**Solutions (12 files):** `solutions-empowering.json`, `solutions-indie-filmmakers.json`, `solutions-schools.json`, `solutions-directors.json`, `solutions-documentary.json`, `solutions-cinematographers.json`, `solutions-agencies.json`, `solutions-teams.json`, `solutions-screenwriters.json`, `solutions-tv-series.json`, `solutions-investors.json`, `solutions-prod-managers.json`

**Remaining (6 files):** `brand.json`, `culture.json`, `privacy.json`, `terms.json`, `vs-final-draft.json`, `knowledge-base.json`

---

### Phase 3: Data Files (3 files)

1. **`src/data/blogDataIt.ts`** — Italian blog metadata (49 posts)
2. **`src/data/blogContentIt.ts`** — Italian blog article body content
3. **`src/data/knowledgeBaseDataIt.ts`** — Italian KB articles (34 articles) with categories

---

### Phase 4: Component Updates

- **`src/pages/Blog.tsx`** / **`BlogArticle.tsx`** / **`BlogCategory.tsx`** — Import and wire `blogDataIt` / `blogContentIt` for `it` locale
- **`src/pages/KnowledgeBase.tsx`** / **`KnowledgeBaseArticle.tsx`** — Import and wire `knowledgeBaseDataIt` for `it` locale

---

### Translation Approach
- Use professional Italian film industry terminology (e.g., *Sceneggiatura* for Script, *Storyboard*, *Regista* for Director, *Produttore* for Producer, *Responsabile di produzione* for Production Manager)
- Preserve brand names (Pzaz, Pzaz Indie, etc.) untranslated
- All translations sourced from the English originals

### Files Changed
- ~8 infrastructure files
- ~34 new JSON files in `src/locales/it/`
- ~3 new data files in `src/data/`
- ~5 component files updated for Italian locale selection

### Estimated Total: ~50 files created/modified

