import { AppText } from "@/shared/components/AppText";
import { RatingBadge } from "@/shared/components/RatingBadge";
import { TmdbImage } from "@/shared/components/TmdbImage";
import { cn } from "@/shared/utils/cn";
import { Pressable, View, type PressableProps } from "react-native";

type PosterCardProps = {
  posterPath: string | null;
  title: string;
  year?: number | null;
  vote?: number;
  onPress: NonNullable<PressableProps["onPress"]>;
  size?: "md" | "sm";
  className?: string;
};

const sizes = {
  md: "w-[124px]",
  sm: "",
};

const imageRadius = {
  md: "rounded-[14px]",
  sm: "rounded-xl",
};

const badgePosition = {
  md: "top-2 left-2",
  sm: "top-1.5 left-1.5",
};

const titleSizes = {
  md: "text-[14px]",
  sm: "text-[13px]",
};

export function PosterCard({
  posterPath,
  title,
  year,
  vote,
  onPress,
  size = "md",
  className,
}: PosterCardProps) {
  return (
    <Pressable
      accessible
      accessibilityRole="button"
      accessibilityLabel={year != null ? `${title}, ${year}` : title}
      onPress={onPress}
      className={cn("gap-2 active:opacity-80", sizes[size], className)}
    >
      <View className="relative">
        <TmdbImage
          path={posterPath}
          size="w342"
          className={cn(
            "w-full aspect-[2/3] border border-border",
            imageRadius[size],
          )}
        />
        {vote !== undefined && (
          <View className={cn("absolute", badgePosition[size])}>
            <RatingBadge vote={vote} size={size} />
          </View>
        )}
      </View>
      <AppText
        accessible={false}
        numberOfLines={1}
        className={cn("font-body-semibold text-text", titleSizes[size])}
      >
        {title}
      </AppText>
      {year != null && (
        <AppText
          accessible={false}
          variant="caption"
          className="-mt-1 text-[12px]"
        >
          {year}
        </AppText>
      )}
    </Pressable>
  );
}
