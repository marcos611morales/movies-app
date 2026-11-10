import type { IoniconName } from "@/shared/components/types";
import { useThemeColors } from "@/shared/theme/useThemeColors";
import { cn } from "@/shared/utils/cn";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { Pressable, type PressableProps } from "react-native";

type IconButtonProps = {
  icon: IoniconName;
  onPress: NonNullable<PressableProps["onPress"]>;
  accessibilityLabel: string;
  variant?: "surface" | "elevated" | "overlay";
  iconSize?: number;
  className?: string;
};

const base =
  "h-11 w-11 items-center justify-center rounded-full active:opacity-80";

const variants = {
  surface: "bg-surface border border-border",
  elevated: "bg-surface-elevated border border-border",
  overlay: "bg-overlay",
};

const iconColors = {
  surface: "text",
  elevated: "textSecondary",
  overlay: "text",
} as const;

export function IconButton({
  icon,
  onPress,
  accessibilityLabel,
  variant = "surface",
  iconSize = 22,
  className,
}: IconButtonProps) {
  const colors = useThemeColors();

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      className={cn(base, variants[variant], className)}
    >
      <Ionicons
        accessible={false}
        name={icon}
        size={iconSize}
        color={colors[iconColors[variant]]}
      />
    </Pressable>
  );
}
