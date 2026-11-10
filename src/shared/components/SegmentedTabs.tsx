import { AppText } from "@/shared/components/AppText";
import { cn } from "@/shared/utils/cn";
import { Pressable, View } from "react-native";

type SegmentedTabsProps<T extends string> = {
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
};

const base =
  "flex-row gap-1 p-1 rounded-full bg-surface border border-border";

const optionBase =
  "flex-1 min-w-0 h-10 px-2 items-center justify-center rounded-full active:opacity-80";

const variants = {
  selected: "bg-primary",
  unselected: "bg-transparent",
};

const textVariants = {
  selected: "text-on-primary",
  unselected: "text-text-secondary",
};

export function SegmentedTabs<T extends string>({
  options,
  value,
  onChange,
  className,
}: SegmentedTabsProps<T>) {
  return (
    <View accessibilityRole="tablist" className={cn(base, className)}>
      {options.map((option) => {
        const selected = option.value === value;
        const variant = selected ? "selected" : "unselected";

        return (
          <Pressable
            key={option.value}
            accessibilityRole="tab"
            accessibilityLabel={option.label}
            accessibilityState={{ selected }}
            onPress={() => onChange(option.value)}
            className={cn(optionBase, variants[variant])}
          >
            <AppText
              numberOfLines={1}
              className={cn(
                "max-w-full font-body-semibold text-[13px]",
                textVariants[variant],
              )}
            >
              {option.label}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}
