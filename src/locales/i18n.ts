import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ko from "./ko.json";
import en from "./en.json";
import ch from "./ch.json";

const resource = {
  ko: {
    translation: ko
  },
  en: {
    translation: en
  },
  ch: {
    translation: ch
  }
};

i18n
.use(initReactI18next) // passes i18n down to react-i18next
.init({
  resources: resource,
  lng: 'ko',
  fallbackLng: 'ko',

  interpolation: {
    escapeValue: false
  }
});
