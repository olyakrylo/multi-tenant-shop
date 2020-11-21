import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "./locales/ru.json";
import en from "./locales/en.json";

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

type Language = "en" | "ru";

function getCurrentLanguage(): Language {
  const cookieLang = document.cookie.match(/i18n=(en|ru);?/);
  if (!cookieLang) {
    const navLang = navigator.language.split(/[-_]/)[0];
    return navLang === "ru" || navLang === "en" ? navLang : "en";
  }
  return cookieLang[1] as Language;
}

i18n.use(initReactI18next).init({
  resources,
  lng: getCurrentLanguage(),
  keySeparator: ".",
});

export default i18n;