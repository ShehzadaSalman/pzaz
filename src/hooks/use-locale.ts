import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const SUPPORTED_LOCALES = ["en", "ur"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

const RTL_LOCALES: SupportedLocale[] = ["ur"];

export function useLocale() {
  const { locale } = useParams<{ locale?: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();

  // Derive the current locale from URL param; default to "en"
  const currentLocale: SupportedLocale =
    SUPPORTED_LOCALES.includes(locale as SupportedLocale)
      ? (locale as SupportedLocale)
      : "en";

  function navigateToLocale(targetLocale: SupportedLocale) {
    // Persist preference
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", targetLocale);
    }

    // Set dir on <html>
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute(
        "dir",
        RTL_LOCALES.includes(targetLocale) ? "rtl" : "ltr"
      );
      document.documentElement.setAttribute("lang", targetLocale);
    }

    i18n.changeLanguage(targetLocale);

    // Build the new path
    if (targetLocale === "en") {
      // Strip any locale prefix from the current path
      const stripped = location.pathname.replace(/^\/(ur)(\/|$)/, "/");
      navigate(stripped || "/", { replace: true });
    } else {
      // Prepend locale prefix
      const withoutLocale = location.pathname.replace(/^\/(ur)(\/|$)/, "/");
      const newPath = `/${targetLocale}${withoutLocale === "/" ? "" : withoutLocale}`;
      navigate(newPath, { replace: true });
    }
  }

  return { locale: currentLocale, navigateToLocale };
}
