import "@/shared/i18n/polyfills";

import { DEFAULT_LANGUAGE, type AppLanguage } from "@/shared/i18n/languages";
import { en } from "@/shared/i18n/locales/en";
import { es, type Translations } from "@/shared/i18n/locales/es";
import { getAppLanguage } from "@/shared/i18n/useAppLanguage";
import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";

const i18n = createInstance();

i18n.use(initReactI18next).init({
  resources: {
    "es-MX": { translation: es },
    "en-US": { translation: en },
  } satisfies Record<AppLanguage, { translation: Translations }>,
  lng: getAppLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false },
  initAsync: false,
});

export default i18n;
