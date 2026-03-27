

## Fix: Prevent raw i18n keys flashing on page refresh

### Root Cause

The i18n config has `useSuspense: false`, which means components render immediately with raw translation keys (like `hero.headline1`, `script.hero_h1a`) as fallback text while their namespace JSON files load asynchronously. Only `common` and `home` namespaces are pre-bundled for English — every other page's translations arrive a moment later, causing the flash.

### Solution

Re-enable React Suspense for i18n so that components wait for their translations before rendering, and show a clean branded loader instead of raw keys.

### Changes

**1. `src/i18n.ts`** — Set `useSuspense: true`
- Change `useSuspense: false` to `useSuspense: true`
- This makes `useTranslation()` suspend the component tree until the requested namespace is loaded

**2. `src/App.tsx`** — Replace `<Suspense fallback={null}>` with a branded loading screen
- Create a minimal `PageLoader` component inline (Pzaz logo centered, subtle fade-in)
- Use it as the Suspense fallback so users see the brand loader for ~200-400ms while translations + lazy components load together

**3. `src/main.tsx`** — Wait for `initPromise` before mounting React
- Import `initPromise` from `./i18n`
- Wrap `createRoot().render()` inside `initPromise.then(...)` so the default namespace (`common`) is guaranteed loaded before first render
- This prevents even Header/Footer keys from flashing

### What this achieves
- Zero raw translation keys visible on any page, any locale
- Brief branded loader (~200-400ms) on hard refresh while translations load
- No impact on subsequent client-side navigation (namespaces cache after first load)
- English homepage remains near-instant since `common` + `home` are pre-bundled

