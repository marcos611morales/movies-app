import { AppText } from "@/shared/components/AppText";
import { useFormat } from "@/shared/i18n/useFormat";
import { ratingLevel } from "@/shared/theme/colors";
import { cn } from "@/shared/utils/cn";
import { View } from "react-native";

type RatingBadgeProps = {
  vote: number;
  variant?: "overlay" | "inline";
  size?: "md" | "sm";
  className?: string;
};

const variants = {
  overlay: "bg-overlay",
  inline: "",
};

const overlaySizes = {
  md: "px-[7px] py-[3px] rounded-lg",
  sm: "px-1.5 py-0.5 rounded-md",
};

const textSizes = {
  md: "text-[12px]",
  sm: "text-[11px]",
};

const levelText = {
  high: "text-rating-high",
  mid: "text-rating-mid",
  low: "text-rating-low",
};

export function RatingBadge({
  vote,
  variant = "overlay",
  size = "md",
  className,
}: RatingBadgeProps) {
  const format = useFormat();
  if (vote <= 0) return null;

  return (
    <View
      className={cn(
        variants[variant],
        variant === "overlay" && overlaySizes[size],
        className,
      )}
    >
      <AppText
        className={cn(
          "font-mono-medium",
          textSizes[size],
          levelText[ratingLevel(vote)],
        )}
      >
        ★ {format.rating(vote)}
      </AppText>
    </View>
  );
}
