import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";

const getInitialLang = () => {
  if (typeof window === "undefined") return "en";
  const pathSegment = window.location.pathname.split("/")[1];
  if (pathSegment === "ur") return "ur";
  return localStorage.getItem("lang") ?? "en";
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
    ns: ["common"], // Only common is loaded eagerly on every page
    partialBundledLanguages: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export { initPromise };
export default i18next;
