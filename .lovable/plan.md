

## Add Pzaz Logo to All Navigation Headers

### What will change
Replace the text-only "Pzaz.io" logo in all four header components with the uploaded Pzaz logo image, keeping the existing text as a fallback/complement.

### Steps

1. **Copy the logo file** into `src/assets/pzaz-logo.png`

2. **Update all 4 header components** to import and display the logo image:
   - `src/components/Header.tsx` (homepage)
   - `src/components/blog/BlogHeader.tsx` (blog pages)
   - `src/components/pricing/PricingHeader.tsx` (pricing page)
   - `src/components/script/ScriptHeader.tsx` (script page)

   In each file:
   - Add `import pzazLogo from "@/assets/pzaz-logo.png"`
   - Replace the text-only logo with an `<img>` tag using the imported asset, sized appropriately (approximately h-8) with alt text "Pzaz"
   - For PricingHeader and ScriptHeader, keep the small badge label ("Pricing" / "Script") next to the logo

### Technical details
- The image will be placed in `src/assets/` for proper Vite bundling and optimization
- All four headers follow the same structure, so the change is identical across them
- No new dependencies required

