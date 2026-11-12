import { AppText } from "@/shared/components/AppText";
import { useFormat } from "@/shared/i18n/useFormat";
import { useT } from "@/shared/i18n/useT";
import { ratingLevel } from "@/shared/theme/colors";
import { cn } from "@/shared/utils/cn";
import { View } from "react-native";

type RatingRingProps = {
  vote: number;
  className?: string;
};

const base = "h-14 w-14 rounded-full border-[3px] items-center justify-center";

const levelBorder = {
  high: "border-rating-high",
  mid: "border-rating-mid",
  low: "border-rating-low",
};

const levelText = {
  high: "text-rating-high",
  mid: "text-rating-mid",
  low: "text-rating-low",
};

export function RatingRing({ vote, className }: RatingRingProps) {
  const format = useFormat();
  const unrated = vote <= 0;
  const level = ratingLevel(vote);
  const label = unrated ? "–" : format.rating(vote);
  const t = useT();

  return (
    <View
      accessible
      accessibilityLabel={
        unrated ? t("rating.none") : t("rating.a11yLabel", { value: label })
      }
      className={cn(
        base,
        unrated ? "border-border" : levelBorder[level],
        className,
      )}
    >
      <AppText
        accessible={false}
        className={cn(
          "font-mono-medium text-[16px]",
          unrated ? "text-text-muted" : levelText[level],
        )}
      >
        {label}
      </AppText>
    </View>
  );
}
