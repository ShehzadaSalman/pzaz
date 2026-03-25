import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from "./locales/en.json";
import urJSON from "./locales/ur.json";

const getInitialLang = () => {
  if (typeof window === "undefined") return "en";
  const pathSegment = window.location.pathname.split("/")[1];
  if (pathSegment === "ur") return "ur";
  return localStorage.getItem("lang") ?? "en";
};
const savedLang = getInitialLang();

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
