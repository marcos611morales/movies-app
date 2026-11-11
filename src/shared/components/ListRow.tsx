import { AppText } from "@/shared/components/AppText";
import { cn } from "@/shared/utils/cn";
import type { ReactNode } from "react";
import { Pressable, View } from "react-native";

type ListRowProps = {
  label: string;
  value?: string;
  right?: ReactNode;
  onPress?: () => void;
  divider?: boolean;
  className?: string;
};

const base = "min-h-14 flex-row items-center gap-3 px-4";

export function ListRow({
  label,
  value,
  right,
  onPress,
  divider = false,
  className,
}: ListRowProps) {
  const rowClassName = cn(
    base,
    divider && "border-b border-border",
    onPress && "active:bg-surface-elevated",
    className,
  );

  const content = (
    <>
      <AppText className="flex-1">{label}</AppText>
      {value !== undefined && (
        <AppText variant="caption" className="text-[14px]" numberOfLines={1}>
          {value}
        </AppText>
      )}
      {right}
    </>
  );

  if (onPress) {
    return (
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={value ? `${label}, ${value}` : label}
        onPress={onPress}
        className={rowClassName}
      >
        {content}
      </Pressable>
    );
  }

  return <View className={rowClassName}>{content}</View>;
}
