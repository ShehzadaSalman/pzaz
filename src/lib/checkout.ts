import { useCurrency } from "@/hooks/use-currency";

export const INDIE_CHECKOUT_BASE = "https://projector.pzaz.io/checkout?plan=indie&period=month&addons=indie_free";

export function useIndieCheckoutUrl(): string {
  const { currency } = useCurrency();
  return `${INDIE_CHECKOUT_BASE}&currency=${currency}`;
}
