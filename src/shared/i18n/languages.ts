export const SUPPORTED_LANGUAGES = {
  "es-MX": { region: "MX" },
  "en-US": { region: "US" },
} as const;

export type AppLanguage = keyof typeof SUPPORTED_LANGUAGES; // "es-MX" | "en-US"
export type LanguagePreference = "system" | AppLanguage;

export const DEFAULT_LANGUAGE: AppLanguage = "es-MX";
