

## Fix: Language should be determined by URL, not localStorage

### Problem
When a user visits `/ur`, localStorage saves `lang=ur`. If they then navigate to `/` (English home), two places still read that localStorage value and incorrectly apply Urdu:

1. **`index.html` line 8** — the synchronous script falls back to `localStorage.getItem('lang')` when the URL segment isn't `ur`
2. **`src/i18n.ts` line 15** — `getInitialLang()` does the same fallback

Since pre-rendered pages already have the correct language baked in, the URL is the single source of truth. localStorage should only be used on `/ur` routes, never to override English routes.

### Fix (2 files, minimal changes)

**1. `index.html` — synchronous lang script**
Change the fallback: if the URL path doesn't start with `/ur`, always use `'en'`. Remove the localStorage fallback entirely from this script.

```js
var seg = window.location.pathname.split('/')[1];
var lang = seg === 'ur' ? 'ur' : 'en';
```

**2. `src/i18n.ts` — `getInitialLang()`**
Same fix: URL is the authority. If path doesn't start with `/ur`, default to `'en'`.

```ts
const getInitialLang = () => {
  if (typeof window === "undefined") return "en";
  const pathSegment = window.location.pathname.split("/")[1];
  return pathSegment === "ur" ? "ur" : "en";
};
```

### Why this is safe
- Pre-rendered HTML already has correct `lang`/`dir` attributes baked in
- The `LocaleWrapper` component still sets localStorage on navigation (for analytics etc.), but it no longer drives initial language selection
- Client-side navigation between `/` and `/ur` uses `navigateToLocale()` which explicitly changes i18n language — no localStorage dependency

