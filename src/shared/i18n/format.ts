import type { AppLanguage } from "@/shared/i18n/languages";

const numberCache = new Map<string, Intl.NumberFormat>();
const dateCache = new Map<AppLanguage, Intl.DateTimeFormat>();

function numberFormatter(
  language: AppLanguage,
  kind: "rating" | "number" | "currency",
  options: Intl.NumberFormatOptions,
): Intl.NumberFormat {
  const key = `${language}:${kind}`;
  let formatter = numberCache.get(key);

  if (!formatter) {
    formatter = new Intl.NumberFormat(language, options);
    numberCache.set(key, formatter);
  }

  return formatter;
}

export function formatRating(vote: number, language: AppLanguage): string {
  return numberFormatter(language, "rating", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(vote);
}

export function formatNumber(value: number, language: AppLanguage): string {
  return numberFormatter(language, "number", {}).format(value);
}

export function formatCurrency(value: number, language: AppLanguage): string {
  return numberFormatter(language, "currency", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatDate(date: Date, language: AppLanguage): string {
  let formatter = dateCache.get(language);

  if (!formatter) {
    formatter = new Intl.DateTimeFormat(language, {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    dateCache.set(language, formatter);
  }

  return formatter.format(date);
}
