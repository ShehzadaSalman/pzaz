
## Analysis

The Lighthouse report flags several categories of issues. Here's what's actionable in the codebase vs. what's external:

**Actionable in this codebase:**
1. **Cache lifetimes (11,617 KiB)** — The app is served via `npx serve dist` in Docker. `serve` supports a `serve.json` config file with custom response headers. Adding `Cache-Control: public, max-age=31536000, immutable` for hashed assets and a shorter TTL for HTML will fix this.
2. **geo-detect called 5 times** — The `useCurrency` hook runs an effect that calls the edge function in every component that mounts with the hook (`ProductsSection`, `Breakdown`, `PricingStageSelector`, `Header` via `useIndieCheckoutUrl`, `Hero` via `useIndieCheckoutUrl`). A module-level singleton/cache should be added so the network call only happens once.
3. **Preconnect hints** — Adding `<link rel="preconnect">` for `https://zrlonqczjzkgzmxiwdcl.supabase.co` and `https://d13sozod7hpim.cloudfront.net` to `index.html` saves ~500ms on those origins.
4. **Non-composited gradient animation** — The `animate-gradient` / `gradient-hero-bg` class animates `background-position`, which is not GPU-composited. Replacing it with a CSS `opacity` pulse or a `transform`-based approach removes layout thrashing. The simplest fix: swap the keyframe to use `opacity` fade instead of `background-position`.
5. **Images missing explicit width/height** — `SolutionCard` renders `<img>` without `width`/`height` attributes. Adding them prevents layout shift (CLS).
6. **Hero video lazy loading** — The `<video>` in `Hero.tsx` loads eagerly. Adding `preload="none"` stops it blocking initial render.
7. **3rd-party scripts deferred** — GTM and Google Analytics inline scripts in `index.html` block the parser. Deferring the GA `<script>` tag and moving the Brevo script to load after page load will reduce render-blocking time.

**Not actionable in codebase (external/CDN):**
- Facebook Pixel legacy JS (their code, not ours)
- Brevo's Meteor.js bundle from CloudFront (3rd party)
- Unused CSS from `main.css` (Tailwind purge is already running; the "waste" is from classes used conditionally/dynamically)

---

## Changes

### 1. `serve.json` (new file at project root)
Add a `serve` configuration file that sets aggressive `Cache-Control` headers for hashed Vite build assets and the video, plus a short TTL for HTML/JSON:
```text
/assets/*   → Cache-Control: public, max-age=31536000, immutable
/videos/*   → Cache-Control: public, max-age=86400
/*.html     → Cache-Control: no-cache
```

### 2. `Dockerfile`
Pass the `serve.json` to `serve` using its `-c serve.json` flag so the config is picked up at runtime.

### 3. `src/hooks/use-currency.ts`
Add a **module-level promise cache** so the geo-detect fetch fires exactly once per page load regardless of how many components call `useCurrency()`. All hook instances share the single in-flight (or resolved) promise.

### 4. `index.html`
- Add `<link rel="preconnect" href="https://zrlonqczjzkgzmxiwdcl.supabase.co" crossorigin>` and `<link rel="preconnect" href="https://d13sozod7hpim.cloudfront.net" crossorigin>`
- Add `<link rel="dns-prefetch">` for those same origins as fallback
- Change the GA `<script>` tag from blocking to `async` (it already has async but the inline `gtag()` config block below it is fine)
- Add `defer` to the Brevo inline script so it creates the `<script>` tag after DOMContentLoaded

### 5. `src/components/Hero.tsx`
Add `preload="none"` to the `<video>` tag to prevent the 4 MB video from blocking initial render.

### 6. `src/index.css`
Replace the `gradient-shift` keyframe (animates `background-position`, non-composited) with a `transform: scaleX` or `opacity` animation to eliminate the non-composited animation Lighthouse warning. The `animate-gradient` class is only used on two CTA backgrounds (`SharedCTA`, `PricingCTA`), so this is low-risk.

### 7. `src/components/SolutionCard.tsx`
Add `width` and `height` attributes to the preview `<img>` to prevent layout shift. Since the images are responsive, use `width="968" height="448"` (the actual source dimensions of the largest card image) combined with the existing `w-full h-auto` class — browsers use the ratio without enforcing pixel size.

---

## Summary of Expected Gains

| Issue | Fix | Expected saving |
|---|---|---|
| No cache TTL on assets | `serve.json` cache headers | 11,617 KiB repeat-visit savings |
| geo-detect × 5 calls | Module-level singleton cache | ~5 × 1.16 KiB + 5 × 2.4s → 1 call |
| Missing preconnects | `<link rel="preconnect">` in HTML | ~500ms LCP improvement |
| Hero video blocking | `preload="none"` | Reduces initial payload ~4 MB |
| Non-composited animation | Keyframe swap to opacity | Removes CLS/jank warning |
| Images missing dimensions | width/height on img tags | CLS improvement |
| Brevo blocking render | Defer script creation | Reduces render-blocking |
