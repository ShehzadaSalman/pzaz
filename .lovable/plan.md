
## Translate All Pages to Urdu

### Current Situation

Right now, only the **Home page** sections use the `t()` translation hook. The home page works because its components (`Hero`, `ProblemSection`, `SolutionSection`, `AIContextSection`, `ProductsSection`, `IntegrationsSection`, `SharedCTA`, `Footer`, `Header`) all already call `useTranslation()` and are wired to `en.json` / `ur.json`.

All other pages (~40 pages: Script, Budget, Storyboard, Indie, Planning, StudioPro, SceneBreakdown, CollaborationTools, TaskManagement, FileSharing, ProjectManagement, plus all 12 Solutions pages, Pricing, Blog, Knowledge Base, etc.) have **hardcoded English strings** directly in JSX — no `t()` calls.

Additionally, only `/ur` (home) exists in the Urdu route tree in `App.tsx`. All other pages under `/ur/*` return a 404.

---

### Approach: Phase-based, meaning-first translation

Rather than word-for-word, every Urdu string will capture the **intent and tone** — direct, confident, production-industry voice. Technical terms that Urdu-speaking film professionals use (like "script", "storyboard", "breakdown", "budget") will be kept as-is or given the commonly used Urdu equivalent.

---

### What changes

**Phase 1 — Infrastructure (1 file)**
- `src/App.tsx`: Add all remaining pages as child routes under `<Route path="/ur" element={<LocaleWrapper />}>` — matching the full English route list.
- `src/routes.ts`: Add all `/ur/*` paths to `staticRoutes` for prerendering.

**Phase 2 — Translation keys (2 files)**
- `src/locales/en.json`: Add new namespaced keys for every page:
  - `script`, `budget`, `storyboard`, `indie`, `planning`, `studio_pro`
  - `scene_breakdown`, `collaboration`, `task_management`, `file_sharing`, `project_management`
  - `pricing`, `schools`, `directors`, `documentary`, `cinematographers`, `agencies`, `production_teams`, `screenwriters`, `tv_series`, `investors`, `production_managers`, `empowering`, `indie_filmmakers`
  - Shared keys: `shared_cta`, `shared_problem`, `shared_ai`
- `src/locales/ur.json`: Urdu equivalents for every key above — meaning-first, conversational tone.

**Phase 3 — Wire components (many files)**
Each page's components get refactored to replace hardcoded strings with `t("namespace.key")`. This follows the exact same pattern already working on the home page.

Components to update per product page (example for Budget):
- `BudgetHero`, `BudgetProblem`, `BudgetConnected`, `BudgetBehaviourChange`, `BudgetAI`, `BudgetFeatures`, `BudgetLegacy`, `BudgetCTA`

---

### Scope summary

```
Pages to translate:            ~35 product/feature/solution pages
Components to wire:            ~120 component files
New translation keys:          ~800–1000 keys across en.json + ur.json
Route entries added:           ~35 in App.tsx + routes.ts
Pages skipped (unchanged):     Blog, KnowledgeBase, Privacy, Terms, Brand, Culture
                                (content-heavy or legal — kept English-only)
```

Pages skipped are not linked from the Urdu nav so users won't hit them unexpectedly.

---

### Execution order (batched for efficiency)

1. **App.tsx + routes.ts** — unlock all `/ur/*` routes
2. **en.json + ur.json** — add all translation keys in one pass
3. **Product pages** (Budget, Script, Storyboard, Indie, Planning, StudioPro) — wire `t()` in all sub-components
4. **Feature pages** (SceneBreakdown, CollaborationTools, TaskManagement, FileSharing, ProjectManagement)
5. **Solutions pages** (all 12 audience pages)
6. **Pricing page**

Each batch is a single implementation step with full key coverage so nothing is left half-translated.
