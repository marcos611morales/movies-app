import { AppText } from "@/shared/components/AppText";
import type { IoniconName } from "@/shared/components/types";
import { useThemeColors } from "@/shared/theme/useThemeColors";
import { cn } from "@/shared/utils/cn";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import {
  ActivityIndicator,
  Pressable,
  type PressableProps,
} from "react-native";

const base = "flex-row items-center justify-center gap-2 rounded-full px-6";

const sizes = {
  lg: "h-[54px]",
  md: "h-[46px]",
};

const variants = {
  primary: "bg-primary active:bg-primary-pressed",
  secondary: "bg-surface border border-border active:bg-surface-elevated",
};

const textSizes = {
  lg: "text-[16px]",
  md: "text-[15px]",
};

const textVariants = {
  primary: "text-on-primary",
  secondary: "text-text",
};

type ButtonProps = {
  label: string;
  onPress: NonNullable<PressableProps["onPress"]>;
  variant?: "primary" | "secondary";
  size?: "lg" | "md";
  icon?: IoniconName;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
};

export function Button({
  label,
  onPress,
  variant = "primary",
  size = "lg",
  icon,
  loading = false,
  disabled = false,
  className,
}: ButtonProps) {
  const colors = useThemeColors();
  const isDisabled = disabled || loading;
  const foregroundColor =
    variant === "primary" ? colors.onPrimary : colors.text;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      disabled={isDisabled}
      onPress={onPress}
      className={cn(
        base,
        sizes[size],
        variants[variant],
        isDisabled && "opacity-50",
        className,
      )}
    >
      {loading ? (
        <ActivityIndicator
          accessible={false}
          size="small"
          color={foregroundColor}
        />
      ) : icon ? (
        <Ionicons
          accessible={false}
          name={icon}
          size={size === "lg" ? 18 : 16}
          color={foregroundColor}
        />
      ) : null}
      <AppText
        className={cn(
          "font-body-semibold",
          textSizes[size],
          textVariants[variant],
        )}
      >
        {label}
      </AppText>
    </Pressable>
  );
}
