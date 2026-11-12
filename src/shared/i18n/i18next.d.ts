import type { Translations } from "@/shared/i18n/locales/es";
import "i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: { translation: Translations };
  }
}
