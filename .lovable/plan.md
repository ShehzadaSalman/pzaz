
## Fix: Urdu-Aware Line Height in Hero Headline

**Problem:** The `<h1>` in `Hero.tsx` has a fixed `leading-[1.1]` class — tight line height designed for short Latin text. Urdu Nastaliq script has tall ascenders/descenders that need more breathing room (typically `leading-[1.6]` or higher).

**Solution:** Use `i18n.language` (or `useLocale`) to conditionally apply a looser line height class when the active language is Urdu.

### Change in `src/components/Hero.tsx`

1. Import `useTranslation` is already present — also destructure `i18n` from it.
2. Derive a boolean `isUrdu = i18n.language === "ur"`.
3. Apply the line height conditionally on the `<h1>`:
   - English: `leading-[1.1]` (current)
   - Urdu: `leading-[1.6]`

```tsx
// Inside Hero component
const { t, i18n } = useTranslation();
const isUrdu = i18n.language === "ur";

// On the h1 element — replace the static leading-[1.1] with:
className={`font-lato font-bold text-center mb-10 text-balance pt-[40px] md:pt-[60px] text-[32px] sm:text-5xl md:text-6xl lg:text-7xl ${isUrdu ? "leading-[1.6]" : "leading-[1.1]"}`}
```

**Only 1 file changes:** `src/components/Hero.tsx`
