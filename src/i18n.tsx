import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./localization/en/en.json";
import ru from "./localization/ru/ru.json";
import uz from "./localization/uz/uz.json";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  uz: {
    translation: uz,
  },
  ru: {
    translation: ru,
  },
  en: {
    translation: en,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    // lng: "ru",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    fallbackLng: ["uz", "ru", "en"],
  });

export default i18n;
