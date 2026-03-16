
## Plan: Gradient Slide Hover Effect on CTA Buttons

### What the user wants
The key effect from their CSS snippet is a **sliding gradient on hover** — the gradient is made wider than the button (`background-size: 200% auto`), then on hover it shifts position (`background-position: right center`) over a 0.5s transition. This creates a smooth "slide" effect without changing any colors.

### Current state
- `gradient-cta-bg` class in `index.css` defines: `background: linear-gradient(247.38deg, #29FADF -2.17%, #8B1DFF 84.87%)`
- The `default` button variant uses `gradient-cta-bg` + `transition-all duration-300`
- `product-card-gradient` variant also uses `gradient-cta-bg`

### Approach
**Only touch `src/index.css`** — update the `.gradient-cta-bg` class to add the sliding hover effect:

1. Set `background-size: 200% auto` so the gradient is wider than the button
2. Set initial `background-position: left center`  
3. Add `transition: background-position 0.5s ease` (keep existing transition properties too)
4. Add a `.gradient-cta-bg:hover` rule with `background-position: right center`

The gradient direction needs to change from the angled `247.38deg` to a horizontal `to right` so the slide effect works along the horizontal axis — this preserves the same two colors (`#29FADF` and `#8B1DFF`) just as a left-to-right gradient that slides.

**No changes needed** to `button.tsx` or any page components — the effect is purely CSS and applies globally to all buttons using `gradient-cta-bg`.

### Files to change
- `src/index.css` — update `.gradient-cta-bg` class only
