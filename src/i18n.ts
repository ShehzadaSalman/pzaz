import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from "./locales/en.json";
import urJSON from "./locales/ur.json";

const savedLang = typeof window !== "undefined" ? (localStorage.getItem("lang") ?? "en") : "en";

i18next.use(initReactI18next).init({
  lng: savedLang,
  fallbackLng: "en",
  resources: {
    en: { translation: enJSON },
    ur: { translation: urJSON },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
