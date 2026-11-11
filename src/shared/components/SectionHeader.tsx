import { AppText } from "@/shared/components/AppText";
import { cn } from "@/shared/utils/cn";
import { Pressable, View } from "react-native";

type SectionHeaderProps = {
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
  note?: string;
  className?: string;
};

export function SectionHeader({
  title,
  actionLabel,
  onActionPress,
  note,
  className,
}: SectionHeaderProps) {
  return (
    <View
      className={cn("flex-row items-baseline justify-between gap-3", className)}
    >
      <AppText variant="title" className="flex-1" numberOfLines={1}>
        {title}
      </AppText>
      {actionLabel && onActionPress ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={actionLabel}
          hitSlop={12}
          onPress={onActionPress}
          className="active:opacity-70"
        >
          <AppText className="font-body-semibold text-[14px] text-primary-text">
            {actionLabel}
          </AppText>
        </Pressable>
      ) : note ? (
        <AppText variant="caption" className="text-[12px] text-text-muted">
          {note}
        </AppText>
      ) : null}
    </View>
  );
}
