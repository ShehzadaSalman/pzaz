

## Untranslated Components Audit

### Fully Translated (no work needed)
- **Script** — all components use `useTranslation`
- **Scene Breakdown** — all 7 components translated
- **Budget** — all 8 components translated
- **Planning** — all 7 components translated
- **Indie** — all components translated (just done)
- **Solution pages** — all 12 pages use `useTranslation('solutions')`

### Components Still Hardcoded in English (30 total)

**Storyboard (5 components)**
1. `StoryboardAlignment.tsx`
2. `StoryboardAnimatics.tsx`
3. `StoryboardCollaborate.tsx`
4. `StoryboardComposition.tsx`
5. `StoryboardMomentum.tsx`

**Studio Pro (6 components)**
1. `StudioProAI.tsx`
2. `StudioProCTA.tsx`
3. `StudioProFeatures.tsx`
4. `StudioProProblem.tsx`
5. `StudioProShift.tsx`
6. `StudioProSlate.tsx`

**Collaboration (5 components)**
1. `CollaborationAI.tsx`
2. `CollaborationContext.tsx`
3. `CollaborationCraft.tsx`
4. `CollaborationModern.tsx`
5. `CollaborationShift.tsx`

**File Sharing (5 components)**
1. `FileSharingAI.tsx`
2. `FileSharingContext.tsx`
3. `FileSharingCraft.tsx`
4. `FileSharingModern.tsx`
5. `FileSharingUSPs.tsx`

**Task Management (6 components)**
1. `TaskManagementAI.tsx`
2. `TaskManagementContext.tsx`
3. `TaskManagementCraft.tsx`
4. `TaskManagementModern.tsx`
5. `TaskManagementShift.tsx`
6. `TaskManagementUSPs.tsx`

**Project Management (3 components)**
1. `ProjectManagementShift.tsx`
2. `ProjectManagementStats.tsx`
3. `ProjectManagementUSPs.tsx`

### Implementation approach
For each group:
1. Extract all hardcoded English strings into translation keys in the corresponding `src/locales/en/{namespace}.json`
2. Add Urdu translations to `src/locales/ur/{namespace}.json`
3. Refactor each component to use `useTranslation(namespace)` and replace hardcoded text with `t()` calls

This is a large but repetitive task — 30 components across 6 page groups, updating 6 English and 6 Urdu locale files.

