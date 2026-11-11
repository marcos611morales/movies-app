import { AppText } from "@/shared/components/AppText";
import { Button } from "@/shared/components/Button";
import type { IoniconName } from "@/shared/components/types";
import { useThemeColors } from "@/shared/theme/useThemeColors";
import { cn } from "@/shared/utils/cn";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { View, type ViewProps } from "react-native";

type EmptyStateProps = {
  icon: IoniconName;
  title: string;
  description?: string;
  actionLabel?: string;
  onActionPress?: () => void;
  tone?: "neutral" | "error";
  actionVariant?: "primary" | "secondary";
  className?: string;
  accessibilityLiveRegion?: ViewProps["accessibilityLiveRegion"];
};

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onActionPress,
  tone = "neutral",
  actionVariant = "primary",
  className,
  accessibilityLiveRegion,
}: EmptyStateProps) {
  const colors = useThemeColors();
  const iconColors = {
    neutral: colors.textMuted,
    error: colors.error,
  };

  return (
    <View
      accessibilityLiveRegion={accessibilityLiveRegion}
      className={cn("items-center justify-center gap-3 px-6 py-10", className)}
    >
      <View className="h-16 w-16 rounded-full bg-surface-elevated items-center justify-center mb-1">
        <Ionicons
          accessible={false}
          name={icon}
          size={28}
          color={iconColors[tone]}
        />
      </View>

      <AppText variant="title" className="text-[20px] text-center">
        {title}
      </AppText>

      {description ? (
        <AppText
          variant="caption"
          className="text-[14px] text-center max-w-[300px]"
        >
          {description}
        </AppText>
      ) : null}
      {actionLabel && onActionPress ? (
        <Button
          label={actionLabel}
          onPress={onActionPress}
          size="md"
          variant={actionVariant}
          className="mt-2"
        />
      ) : null}
    </View>
  );
}
