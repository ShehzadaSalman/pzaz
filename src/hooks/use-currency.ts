import { useState, useEffect } from "react";

export type CurrencyCode = "EUR" | "GBP" | "USD";

const RATES: Record<CurrencyCode, number> = {
  EUR: 1,
  USD: 1.10,
  GBP: 0.85,
};

const SYMBOLS: Record<CurrencyCode, string> = {
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
  if (continentCode === "EU" || EUROZONE.has(countryCode)) return "EUR";
  return "USD";
}

interface UseCurrencyResult {
  currency: CurrencyCode;
  symbol: string;
  convertPrice: (eurPrice: number) => number;
  isLoading: boolean;
}

export function useCurrency(): UseCurrencyResult {
  const [currency, setCurrency] = useState<CurrencyCode>("EUR");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);

    fetch("https://ipapi.co/json/", { signal: controller.signal })
      .then((r) => r.json())
      .then((data) => {
        clearTimeout(timeout);
        if (!cancelled) {
          const detected = detectCurrency(
            data.country_code ?? "",
            data.continent_code ?? ""
          );
          setCurrency(detected);
        }
      })
      .catch(() => {
        // fallback: keep EUR
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, []);

  const convertPrice = (eurPrice: number): number =>
    Math.round(eurPrice * RATES[currency]);

  return {
    currency,
    symbol: SYMBOLS[currency],
    convertPrice,
    isLoading,
  };
}
