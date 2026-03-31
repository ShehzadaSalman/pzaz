import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";

// Bundle English common translations inline so English users never wait for
// a network request before first paint. Other languages and namespaces are
// still loaded on-demand via dynamic import.
import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";

const getInitialLang = () => {
  if (typeof window === "undefined") return "en";
  const pathSegment = window.location.pathname.split("/")[1];
  return pathSegment === "ur" ? "ur" : pathSegment === "fr" ? "fr" : pathSegment === "es" ? "es" : pathSegment === "de" ? "de" : pathSegment === "it" ? "it" : "en";
};
const savedLang = getInitialLang();

// Apply lang + dir synchronously so :lang(ur) CSS and RTL layout are correct
// from the very first render — before any React useEffect runs.
if (typeof document !== "undefined") {
  document.documentElement.setAttribute("lang", savedLang);
  document.documentElement.setAttribute("dir", savedLang === "ur" ? "rtl" : "ltr");
}

// All namespaces are loaded on-demand via dynamic import.
// This means each page only loads the translations it needs.
const initPromise = i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    lng: savedLang,
    fallbackLng: "en",
    defaultNS: "common",
    ns: ["common"],
    partialBundledLanguages: true,
    // Pre-bundle English common so it's available synchronously
    resources: {
      en: { common: enCommon, home: enHome },
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      // Disable Suspense to prevent blank screens while translations load.
      // Components render immediately with fallback keys, then update when
      // the namespace finishes loading — no FCP penalty.
      useSuspense: true,
    },
  });

/**
 * Create a standalone i18next instance for SSR/SSG with all needed
 * namespaces pre-loaded. Call `await` before `renderToString`.
 */
export async function initI18nForSSR(
  locale: string,
  namespaces: string[]
): Promise<typeof i18next> {
  const { default: i18nextSSR } = await import("i18next");
  const { initReactI18next: iri18n } = await import("react-i18next");

  const instance = i18nextSSR.createInstance();

  // Pre-load all requested namespace JSONs
  const resources: Record<string, Record<string, unknown>> = {};
  resources[locale] = {};
  for (const ns of namespaces) {
    try {
      const mod = await import(`./locales/${locale}/${ns}.json`);
      resources[locale][ns] = mod.default ?? mod;
    } catch {
      // Namespace doesn't exist for this locale — skip
    }
  }

  // Also load English fallbacks if locale isn't English
  if (locale !== "en") {
    resources["en"] = {};
    for (const ns of namespaces) {
      try {
        const mod = await import(`./locales/en/${ns}.json`);
        resources["en"][ns] = mod.default ?? mod;
      } catch {
        // skip
      }
    }
  }

  await instance.use(iri18n).init({
    lng: locale,
    fallbackLng: "en",
    defaultNS: "common",
    ns: namespaces,
    resources,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

  return instance as unknown as typeof i18next;
}

export { initPromise };
export default i18next;
