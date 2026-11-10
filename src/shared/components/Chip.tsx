import { AppText } from "@/shared/components/AppText";
import { cn } from "@/shared/utils/cn";
import { Pressable, type PressableProps } from "react-native";

type ChipProps = {
  label: string;
  selected: boolean;
  onPress: NonNullable<PressableProps["onPress"]>;
  className?: string;
};

const base = "h-9 px-4 items-center justify-center rounded-full";

const variants = {
  selected: "bg-primary active:bg-primary-pressed",
  unselected: "bg-surface-elevated active:opacity-80",
};

const textVariants = {
  selected: "text-on-primary",
  unselected: "text-text-secondary",
};

export function Chip({ label, selected, onPress, className }: ChipProps) {
  const variant = selected ? "selected" : "unselected";

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ selected }}
      onPress={onPress}
      className={cn(base, variants[variant], className)}
    >
      <AppText
        className={cn("font-body-semibold text-[14px]", textVariants[variant])}
      >
        {label}
      </AppText>
    </Pressable>
  );
}
