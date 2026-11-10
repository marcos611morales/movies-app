import { tmdbImage, type TmdbImageSize } from "@/shared/api/image";
import type { IoniconName } from "@/shared/components/types";
import { useThemeColors } from "@/shared/theme/useThemeColors";
import { cn } from "@/shared/utils/cn";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { Image } from "expo-image";
import { useState } from "react";
import { View } from "react-native";

type TmdbImageProps = {
  path: string | null;
  size: TmdbImageSize;
  className?: string;
  fallbackIcon?: IoniconName;
  accessibilityLabel?: string;
  fallbackIconSize?: number;
};

export function TmdbImage({
  path,
  size,
  className,
  fallbackIcon = "film-outline",
  accessibilityLabel,
  fallbackIconSize = 32,
}: TmdbImageProps) {
  const colors = useThemeColors();
  const [failedPath, setFailedPath] = useState<string | null>(null);
  const uri = tmdbImage(path, size);
  const failed = failedPath === path;

  return (
    <View
      className={cn(
        "overflow-hidden bg-surface-elevated items-center justify-center",
        className,
      )}
    >
      {uri && !failed ? (
        <Image
          source={{ uri }}
          style={{ width: "100%", height: "100%" }}
          contentFit="cover"
          transition={200}
          onError={() => setFailedPath(path)}
          accessible={!!accessibilityLabel}
          accessibilityLabel={accessibilityLabel}
        />
      ) : (
        <Ionicons
          name={fallbackIcon}
          size={fallbackIconSize}
          color={colors.textMuted}
          accessible={!!accessibilityLabel}
          accessibilityLabel={accessibilityLabel}
          accessibilityRole="image"
        />
      )}
    </View>
  );
}
