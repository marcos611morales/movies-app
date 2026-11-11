import { AppText } from "@/shared/components/AppText";
import { cn } from "@/shared/utils/cn";
import { View } from "react-native";

type InfoTileProps = {
  label: string;
  value: string;
  className?: string;
};

export function InfoTile({ label, value, className }: InfoTileProps) {
  return (
    <View
      accessible
      accessibilityLabel={`${label}, ${value}`}
      className={cn(
        "gap-1 rounded-[14px] border border-border bg-surface p-3.5",
        className,
      )}
    >
      <AppText
        accessible={false}
        variant="caption"
        className="text-[12px] text-text-muted"
      >
        {label}
      </AppText>

      <AppText accessible={false} variant="bodyStrong" numberOfLines={2}>
        {value}
      </AppText>
    </View>
  );
}
