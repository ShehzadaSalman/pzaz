

## Complete Spanish Translations + Split Solutions Namespace for Performance

### Overview
Two tasks: (1) Translate `solutions.json` into Spanish, and (2) split the monolithic 877-line `solutions` namespace into per-page namespaces so each solution page only loads ~60-80 lines instead of 877.

---

### Part A: Split `solutions.json` into per-page namespaces (all 4 locales)

**Why**: Currently every solution page loads all 877 lines of `solutions.json` even though each page only uses ~60-80 keys. Splitting means each page fetches only its own ~2KB file.

**New files** (per locale: en, fr, ur, es = 12 files x 4 = 48 files):

| New namespace file | Source keys | Used by |
|---|---|---|
| `solutions-schools.json` | `schools.*` + `schools_full.*` | `Schools.tsx` |
| `solutions-directors.json` | `directors.*` | `DirectorsProducers.tsx` |
| `solutions-documentary.json` | `documentary.*` | `DocumentaryFilmmakers.tsx` |
| `solutions-cinematographers.json` | `cinematographers.*` | `Cinematographers.tsx` |
| `solutions-agencies.json` | `agencies.*` | `CreativeAgencies.tsx` |
| `solutions-teams.json` | `production_teams.*` + `prod_teams.*` | `ProductionTeams.tsx` |
| `solutions-screenwriters.json` | `screenwriters.*` | `Screenwriters.tsx` |
| `solutions-tv-series.json` | `tv_series.*` | `TVSeriesCreators.tsx` |
| `solutions-investors.json` | `investors.*` | `InvestorsFunding.tsx` |
| `solutions-prod-managers.json` | `production_managers.*` + `prod_managers.*` | `ProductionManagers.tsx` |
| `solutions-empowering.json` | `empowering.*` + `empowering_page.*` | `EmpoweringFilmmaking.tsx` |
| `solutions-indie-filmmakers.json` | `indie_filmmakers.*` + `indie_filmmakers_page.*` | `IndieFilmmakers.tsx` |

**Key changes per file**:
- Flatten: remove the top-level key (e.g., `schools.hero_h1a` becomes just `hero_h1a`)
- Each page component changes `useTranslation('solutions')` to `useTranslation('solutions-schools')` (etc.)
- Update `t("schools.hero_h1a")` → `t("hero_h1a")` in each page component
- Keep the old `solutions.json` deleted (or empty) in all 4 locales
- Update `main.tsx` `getNamespacesForRoute()` to map each solution slug to its specific namespace

**12 page components to update**: Schools, DirectorsProducers, DocumentaryFilmmakers, Cinematographers, CreativeAgencies, ProductionTeams, Screenwriters, TVSeriesCreators, InvestorsFunding, ProductionManagers, EmpoweringFilmmaking, IndieFilmmakers.

---

### Part B: Translate all new Spanish solution files

While splitting, translate the English content into Spanish for all 12 new `src/locales/es/solutions-*.json` files.

---

### Part C: Remaining Spanish translations

1. **Knowledge Base data** (`src/data/knowledgeBaseDataEs.ts`) — Translate all 34 KB article titles, descriptions, and body content into Spanish
2. **Blog data** (`src/data/blogDataEs.ts` + `blogContentEs.ts`) — Translate all 49 blog post metadata (titles, excerpts) and full article content into Spanish

---

### Execution order

1. Split English `solutions.json` into 12 per-page namespace files + update 12 page components
2. Split French `solutions.json` into 12 files (already translated)
3. Split Urdu `solutions.json` into 12 files (already translated)
4. Create 12 Spanish solution files with full translations
5. Delete old `solutions.json` from all 4 locales
6. Update `main.tsx` namespace mapping for solution routes
7. Translate KB and blog content into Spanish

### Technical details

- The `i18n.ts` dynamic import `./locales/${language}/${namespace}.json` automatically resolves the new filenames — no config change needed
- Pre-rendering already covers all `/es/` solution routes in `routes.ts`
- Each split file will be ~2-5KB instead of one 30KB+ file

