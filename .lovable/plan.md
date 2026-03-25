
## Fix: URL-First Language Initialization

**Root cause:** `src/i18n.ts` initializes the language from `localStorage` only. On a hard refresh of `/ur/`, `localStorage` may be "en" (or empty), so i18n starts in English before `LocaleWrapper`'s `useEffect` can correct it — but by then the page has already rendered in English.

**Standard approach:** The URL is the source of truth. Read the locale from the URL path *first*, fall back to `localStorage`, then default to "en".

### Change in `src/i18n.ts`

Replace the single `savedLang` line with a function that checks the URL path segment before localStorage:

```ts
const getInitialLang = () => {
  if (typeof window === "undefined") return "en";
  const pathSegment = window.location.pathname.split("/")[1];
  if (pathSegment === "ur") return "ur";
  return localStorage.getItem("lang") ?? "en";
};
```

This runs synchronously before React mounts, so i18n is initialized with the correct language from the very first render — no flash of English on `/ur/` refresh.

**Only 1 file changes:** `src/i18n.ts`
