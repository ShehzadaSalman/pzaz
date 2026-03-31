

## Add Portuguese (pt) Language — Complete in One Session

Same pattern as Italian/German. Portuguese is LTR. ~50 files to create/modify.

---

### Phase 1: Infrastructure Wiring (8 files)

1. **`src/hooks/use-locale.ts`** — Add `"pt"` to `SUPPORTED_LOCALES`; update both regex patterns from `/(ur|fr|es|de|it)/` to `/(ur|fr|es|de|it|pt)/`
2. **`src/i18n.ts`** — Add `pathSegment === "pt" ? "pt"` to the `getInitialLang` ternary chain
3. **`index.html`** — Add `seg === 'pt' ? 'pt'` to the synchronous lang detection script
4. **`src/components/LanguageDropdown.tsx`** — Add `pt: "Português"` to `languageLabels`
5. **`src/routes.ts`** — Add `"pt"` to the `locales` array; update locale-strip regex
6. **`src/main.tsx`** — Add Portuguese blog routes (`ptBlogRoutes`), include in `allRoutes`, update bare-path regex
7. **`src/App.tsx`** — Add `<Route path="/pt">` group mirroring existing locale groups; update all locale-strip regexes

---

### Phase 2: Create 34 Portuguese Translation JSON Files

Create `src/locales/pt/` with all 34 namespace files translated from English:

- **Core (5):** `common.json`, `home.json`, `pricing.json`, `about.json`, `blog.json`
- **Products (5):** `indie.json`, `planning.json`, `studio-pro.json`, `budget.json`, `storyboard.json`
- **Features (6):** `script.json`, `scene-breakdown.json`, `collaboration.json`, `task-management.json`, `file-sharing.json`, `project-management.json`
- **Solutions (12):** `solutions-empowering.json`, `solutions-indie-filmmakers.json`, `solutions-schools.json`, `solutions-directors.json`, `solutions-documentary.json`, `solutions-cinematographers.json`, `solutions-agencies.json`, `solutions-teams.json`, `solutions-screenwriters.json`, `solutions-tv-series.json`, `solutions-investors.json`, `solutions-prod-managers.json`
- **Other (6):** `brand.json`, `culture.json`, `privacy.json`, `terms.json`, `vs-final-draft.json`, `knowledge-base.json`

Terminology: Professional Portuguese film industry terms (e.g., *Roteiro* for Script, *Storyboard*, *Realizador/Diretor* for Director, *Produtor* for Producer, *Diretor de Fotografia* for Cinematographer).

---

### Phase 3: Data Files (3 files)

1. **`src/data/blogDataPt.ts`** — Portuguese blog metadata (49 posts)
2. **`src/data/blogContentPt.ts`** — Portuguese blog article body content
3. **`src/data/knowledgeBaseDataPt.ts`** — Portuguese KB articles (34) + categories

---

### Phase 4: Component Updates (5 files)

- **`src/pages/Blog.tsx`** — Import/wire `blogPostsPt`
- **`src/pages/BlogArticle.tsx`** — Import/wire `blogPostsPt` + `blogContentPt`
- **`src/pages/BlogCategory.tsx`** — Import/wire `blogPostsPt`
- **`src/pages/KnowledgeBase.tsx`** — Import/wire `kbArticlesPt` + `kbCategoriesPt`
- **`src/pages/KnowledgeBaseArticle.tsx`** — Import/wire `kbArticlesPt` + `kbCategoriesPt`

---

### Summary

- ~8 infrastructure files modified
- ~34 new JSON files in `src/locales/pt/`
- ~3 new data files in `src/data/`
- ~5 component files updated
- **Total: ~50 files created/modified**

