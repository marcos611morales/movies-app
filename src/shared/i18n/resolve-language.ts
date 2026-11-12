import {
  DEFAULT_LANGUAGE,
  type AppLanguage,
  type LanguagePreference,
} from "@/shared/i18n/languages";
import type { Locale } from "expo-localization";

export function resolveDeviceLanguage(locales: Locale[]): AppLanguage {
  for (const locale of locales) {
    if (locale.languageCode === "es") return "es-MX";
    if (locale.languageCode === "en") return "en-US";
  }

  return DEFAULT_LANGUAGE;
}

export function resolveLanguage(
  preference: LanguagePreference,
  locales: Locale[],
): AppLanguage {
  return preference === "system"
    ? resolveDeviceLanguage(locales)
    : preference;
}
