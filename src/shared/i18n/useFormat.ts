import {
  formatCurrency,
  formatDate,
  formatNumber,
  formatRating,
} from "@/shared/i18n/format";
import { useAppLanguage } from "@/shared/i18n/useAppLanguage";

export function useFormat() {
  const language = useAppLanguage();
  return {
    rating: (vote: number) => formatRating(vote, language),
    number: (value: number) => formatNumber(value, language),
    currency: (value: number) => formatCurrency(value, language),
    date: (date: Date) => formatDate(date, language),
  };
}
