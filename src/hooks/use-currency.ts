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

export function useCurrency(): UseCurrencyResult {
  const [currency, setCurrency] = useState<CurrencyCode>("EUR");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const result = await tryFetch(GEO_DETECT_URL, (d: unknown) => {
        const data = d as Record<string, string>;
        return { countryCode: data.country_code ?? "", continentCode: data.continent_code ?? "" };
      });

      if (!cancelled) {
        if (result) {
          setCurrency(detectCurrency(result.countryCode, result.continentCode));
        }
        // else: edge function failed, keep default EUR
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
