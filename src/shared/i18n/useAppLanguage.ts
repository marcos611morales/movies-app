import { useSettingsStore } from "@/features/settings/store/settings-store";
import type { AppLanguage } from "@/shared/i18n/languages";
import { resolveLanguage } from "@/shared/i18n/resolve-language";
import { getLocales, useLocales } from "expo-localization";

export function useAppLanguage(): AppLanguage {
  const preference = useSettingsStore((state) => state.language);
  const locales = useLocales();
  return resolveLanguage(preference, locales);
}

export function getAppLanguage(): AppLanguage {
  return resolveLanguage(useSettingsStore.getState().language, getLocales());
}
