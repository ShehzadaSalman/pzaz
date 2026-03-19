import { useState, useEffect } from "react";

export type CurrencyCode = "EUR" | "GBP" | "USD";

export const SYMBOLS: Record<CurrencyCode, string> = {
  EUR: "€",
  USD: "$",
  GBP: "£",
};

// Eurozone country codes
const EUROZONE = new Set([
  "AT","BE","CY","EE","FI","FR","DE","GR","IE","IT",
  "LV","LT","LU","MT","NL","PT","SK","SI","ES",
]);

function detectCurrency(countryCode: string, continentCode: string): CurrencyCode {
  if (countryCode === "GB") return "GBP";
  if (continentCode === "EU" || continentCode === "Europe" || EUROZONE.has(countryCode)) return "EUR";
  return "USD";
}

// GBP prices are hardcoded per plan/product key.
// EUR and USD share the same numeric value (only symbol differs).
export const GBP_PRICES: Record<string, number> = {
  // PricingStageSelector tiers
  "planning-pro": 99,
  "studio-pro": 169,
  "budget": 39,
  "private-llm": 229,
  // extra user add-on
  "extra-user": 39,
  // ProductsSection / Breakdown products (keyed by EUR price)
  "product-49": 39,   // Budget €49 → £39
  "product-39": 29,   // Storyboard €39 → £29
  "product-199": 169, // Studio €199 → £169
};

// Attempt to fetch from a geo API; returns { countryCode, continentCode } or null on failure
async function tryFetch(url: string, mapFn: (d: unknown) => { countryCode: string; continentCode: string }): Promise<{ countryCode: string; continentCode: string } | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const r = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);
    const data = await r.json();
    return mapFn(data);
  } catch {
    return null;
  }
}

interface UseCurrencyResult {
  currency: CurrencyCode;
  symbol: string;
  /** Returns the display price for a given EUR price.
   *  For GBP, pass a priceKey to get the hardcoded GBP value.
   *  For EUR/USD the numeric value is the same, only symbol differs. */
  getPrice: (eurPrice: number, priceKey?: string) => number;
  isLoading: boolean;
}

const GEO_DETECT_URL = "https://zrlonqczjzkgzmxiwdcl.supabase.co/functions/v1/geo-detect";

// Module-level singleton: ensures geo-detect fires exactly once per page load
// regardless of how many components call useCurrency().
let geoPromise: Promise<{ countryCode: string; continentCode: string } | null> | null = null;
// Resolved value cached synchronously once the promise settles
let geoResult: { countryCode: string; continentCode: string } | null | undefined = undefined;

/** Call as early as possible (e.g. top of main.tsx) to pre-warm the geo fetch. */
export function warmGeoDetect() {
  getGeoPromise();
}

function getGeoPromise() {
  if (!geoPromise) {
    geoPromise = tryFetch(GEO_DETECT_URL, (d: unknown) => {
      const data = d as Record<string, string>;
      return { countryCode: data.country_code ?? "", continentCode: data.continent_code ?? "" };
    }).then((r) => {
      geoResult = r; // cache synchronously for subsequent hook calls
      return r;
    });
  }
  return geoPromise;
}

export function useCurrency(): UseCurrencyResult {
  // If geo-detect already resolved (pre-warmed before mount), use it synchronously
  // so the component renders with the correct currency on the very first paint —
  // avoiding the 14s+ LCP element-render delay caused by a post-mount re-render.
  const initialCurrency: CurrencyCode =
    geoResult !== undefined
      ? geoResult
        ? detectCurrency(geoResult.countryCode, geoResult.continentCode)
        : "EUR"
      : "EUR";

  const [currency, setCurrency] = useState<CurrencyCode>(initialCurrency);
  const [isLoading, setIsLoading] = useState(geoResult === undefined);

  useEffect(() => {
    // Already resolved synchronously — nothing to do
    if (geoResult !== undefined) return;

    let cancelled = false;

    (async () => {
      const result = await getGeoPromise();

      if (!cancelled) {
        if (result) {
          setCurrency(detectCurrency(result.countryCode, result.continentCode));
        }
        setIsLoading(false);
      }
    })();

    return () => { cancelled = true; };
  }, []);

  const getPrice = (eurPrice: number, priceKey?: string): number => {
    if (currency === "GBP" && priceKey && GBP_PRICES[priceKey] !== undefined) {
      return GBP_PRICES[priceKey];
    }
    // EUR and USD: same numeric value
    return eurPrice;
  };

  return {
    currency,
    symbol: SYMBOLS[currency],
    getPrice,
    isLoading,
  };
}
