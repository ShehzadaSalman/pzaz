import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const SUPPORTED_LOCALES = ["en", "ur", "fr", "es", "de", "it"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

const RTL_LOCALES: SupportedLocale[] = ["ur"];

export function useLocale() {
  const { locale: paramLocale } = useParams<{ locale?: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();

  // Derive the current locale from URL param OR pathname prefix; default to "en"
  const pathSegment = location.pathname.split("/")[1];
  const detectedLocale = paramLocale ?? (SUPPORTED_LOCALES.includes(pathSegment as SupportedLocale) ? pathSegment as SupportedLocale : undefined);
  const currentLocale: SupportedLocale =
    SUPPORTED_LOCALES.includes(detectedLocale as SupportedLocale)
      ? (detectedLocale as SupportedLocale)
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
      const stripped = location.pathname.replace(/^\/(ur|fr|es|de|it)(\/|$)/, "/");
      navigate(stripped || "/", { replace: true });
    } else {
      // Prepend locale prefix
      const withoutLocale = location.pathname.replace(/^\/(ur|fr|es|de|it)(\/|$)/, "/");
      const newPath = `/${targetLocale}${withoutLocale === "/" ? "" : withoutLocale}`;
      navigate(newPath, { replace: true });
    }
  }

  const prefix = currentLocale === "en" ? "" : `/${currentLocale}`;
  return { locale: currentLocale, prefix, navigateToLocale };
}
