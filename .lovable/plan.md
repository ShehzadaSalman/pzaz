
## Geo-based Currency Detection — No Toggle

### Summary
Auto-detect the user's region via IP and display prices in EUR (€), GBP (£), or USD ($) across all pricing components that are actually rendered on live pages. No manual toggle.

---

### Files affected (active/live components only)

| File | What changes |
|---|---|
| `src/hooks/use-currency.ts` | **New** — IP detection hook |
| `src/components/pricing/PricingStageSelector.tsx` | Main pricing grid — prices + symbols + checkout URL param |
| `src/components/ProductsSection.tsx` | Homepage products grid — 3 price strings |
| `src/pages/Breakdown.tsx` | Breakdown page products section — `priceMonthly`/`priceAnnual` display + `$` symbol fix |

**Excluded** (not rendered on any live page):
- `PricingBundles` — commented out in `Pricing.tsx`
- `PricingAI` — commented out in `Pricing.tsx`
- `PricingCartBar` — commented out in `Pricing.tsx`
- `ScriptPricing` — not imported anywhere

---

### Hook: `src/hooks/use-currency.ts`

```text
useCurrency()
  → fetches ipapi.co/json/ once on mount
  → maps country/continent to: EUR | GBP | USD
  → returns: { symbol, convertPrice(eurPrice), isLoading }
  → on fetch failure: defaults to EUR

Conversion rates (EUR base):
  EUR → USD: × 1.10  (rounded to nearest whole $)
  EUR → GBP: × 0.85  (rounded to nearest whole £)

Region mapping:
  country_code === "GB"         → GBP
  continent_code === "EU" OR
  country_code in eurozone list → EUR
  everything else               → USD
```

---

### PricingStageSelector changes

1. Import and call `useCurrency()`
2. `getDisplayPrice()` → use `symbol + convertPrice(tier.basePrice)` instead of hardcoded `€`
3. `UserSelector` extra-user label → use `symbol + convertPrice(EXTRA_USER_PRICE)` per extra user
4. Checkout URL `currency=EUR` param → replaced dynamically with the detected currency code

---

### ProductsSection changes

The 3 product price strings are currently hardcoded (`"€49/mo"`, `"€39/mo"`, `"€199/mo"`). Change the `products` array to store numeric EUR prices, then use `useCurrency()` to render `symbol + convertPrice(price) + "/mo"`.

---

### Breakdown.tsx changes

The products section already stores numeric `priceMonthly`/`priceAnnual` values. Currently it hardcodes `$` as the symbol (a bug). Replace with `useCurrency()` to show the correct symbol + converted price.

---

### Conversion reference table

| EUR | USD | GBP |
|---|---|---|
| €29 | $32 | £25 |
| €39 | $43 | £33 |
| €49 | $54 | £42 |
| €99 | $109 | £84 |
| €129 | $142 | £110 |
| €199 | $219 | £169 |
| €249 | $274 | £212 |
| +€49/user | +$54/user | +£42/user |

---

### Notes
- No toggle UI added
- No localStorage persistence needed (re-detects on page load)
- IP call is a single fetch with a try/catch; graceful fallback to EUR on any error
- The hook is lightweight and shared across components via React's normal import pattern (no context needed — each component that imports it makes its own fetch, but it's one small API call)
