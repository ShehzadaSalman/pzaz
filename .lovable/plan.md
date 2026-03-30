

## Add French as a Third Language

### Overview
French needs to be added alongside English and Urdu across the entire site. This is a large but well-patterned task thanks to the existing i18n infrastructure. The work breaks into two phases: infrastructure wiring (small) and translation content (large).

---

### Phase 1: Infrastructure Wiring (8 files)

**1. Register "fr" as a supported locale**
- `src/hooks/use-locale.ts` — add `"fr"` to `SUPPORTED_LOCALES`; update the regex in `navigateToLocale` from `/(ur)` to `/(ur|fr)` so locale stripping works for both non-English locales

**2. Language detection scripts**
- `index.html` line 8 — expand `seg === 'ur' ? 'ur' : 'en'` to also check for `'fr'`
- `src/i18n.ts` line 14 — same change in `getInitialLang()`

**3. Language dropdown**
- `src/components/LanguageDropdown.tsx` — add `fr: "French"` to the `languageLabels` map (no other change needed; the dropdown already iterates `SUPPORTED_LOCALES`)

**4. LocaleWrapper**
- `src/components/LocaleWrapper.tsx` — no change needed (already reads from `SUPPORTED_LOCALES` and only adds RTL for `ur`)

**5. Pre-render routes**
- `src/routes.ts` — duplicate all `/ur/...` routes as `/fr/...` (~47 new entries)

**6. Router**
- `src/App.tsx` (or wherever `/:locale/*` routes are declared) — should already work via the dynamic `:locale` param; verify no hardcoded `"ur"` checks exist

---

### Phase 2: Translation Files (23 namespace files)

Create `src/locales/fr/` directory with one JSON file per namespace, matching the English structure:

```text
src/locales/fr/
├── about.json
├── blog.json
├── brand.json
├── budget.json
├── collaboration.json
├── common.json          ← nav, footer, contact, 404, sales
├── culture.json
├── file-sharing.json
├── home.json
├── indie.json
├── knowledge-base.json
├── planning.json
├── pricing.json
├── privacy.json
├── project-management.json
├── scene-breakdown.json
├── script.json
├── solutions.json
├── storyboard.json
├── studio-pro.json
├── task-management.json
├── terms.json
└── vs-final-draft.json
```

Each file will contain the same keys as its English counterpart, with professional French translations. Film industry terms (e.g., "storyboard", "script breakdown") will use their standard French equivalents where they exist, or keep the English term when it is industry-standard in French.

---

### Phase 3: Blog & Knowledge Base Content

The blog and knowledge base articles have their content stored in data files (`src/data/blogData.ts`, `src/data/blogDataFull.ts`, `src/data/knowledgeBaseData.ts`). For Urdu, separate `*Ur.ts` files were created. The same pattern will be followed:

- Create `src/data/blogDataFr.ts` and `src/data/blogContentFr.ts` with French blog content
- Create `src/data/knowledgeBaseDataFr.ts` with French KB articles
- Update the blog/KB pages to select the correct data file based on locale (same pattern as the Ur data switching)

---

### Estimated scale
- **Infrastructure**: ~8 files, small edits each
- **Translation JSONs**: 23 new files (copy English keys, translate values)
- **Blog/KB data**: 3 new data files
- **Pre-render routes**: ~47 new route entries

### Execution order
1. Infrastructure wiring first (so `/fr/` routes work immediately with English fallback)
2. `common.json` and `home.json` (so nav/footer/homepage render in French)
3. Product pages (script, budget, planning, storyboard, studio-pro, indie)
4. Feature pages (scene-breakdown, collaboration, file-sharing, task-management, project-management)
5. Solution pages, pricing, about, brand, culture, privacy, terms, vs-final-draft
6. Blog and Knowledge Base content last

