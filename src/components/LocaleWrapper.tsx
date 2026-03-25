import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LOCALES, type SupportedLocale } from "@/hooks/use-locale";

const RTL_LOCALES: SupportedLocale[] = ["ur"];

const LocaleWrapper = () => {
  const { locale } = useParams<{ locale?: string }>();
  const { i18n } = useTranslation();

  const resolvedLocale: SupportedLocale = SUPPORTED_LOCALES.includes(
    locale as SupportedLocale
  )
    ? (locale as SupportedLocale)
    : "en";

  useEffect(() => {
    if (i18n.language !== resolvedLocale) {
      i18n.changeLanguage(resolvedLocale);
    }
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute(
        "dir",
        RTL_LOCALES.includes(resolvedLocale) ? "rtl" : "ltr"
      );
      document.documentElement.setAttribute("lang", resolvedLocale);
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", resolvedLocale);
    }
  }, [resolvedLocale, i18n]);

  return <Outlet />;
};

export default LocaleWrapper;
