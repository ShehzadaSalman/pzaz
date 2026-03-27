import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from "./locales/en.json";

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

// Only English is bundled eagerly. Urdu is loaded on demand.
const resources: Record<string, { translation: Record<string, unknown> }> = {
  en: { translation: enJSON },
};

// If the initial language is Urdu, load it synchronously-ish before init
const initPromise = (async () => {
  if (savedLang === "ur") {
    const urJSON = await import("./locales/ur.json");
    resources.ur = { translation: urJSON.default ?? urJSON };
  }

  await i18next.use(initReactI18next).init({
    lng: savedLang,
    fallbackLng: "en",
    resources,
    interpolation: {
      escapeValue: false,
    },
  });
})();

// Lazy-load Urdu when switching languages at runtime
i18next.on("languageChanged", async (lng) => {
  if (lng === "ur" && !i18next.hasResourceBundle("ur", "translation")) {
    const urJSON = await import("./locales/ur.json");
    i18next.addResourceBundle("ur", "translation", urJSON.default ?? urJSON, true, true);
  }
});

export { initPromise };
export default i18next;
