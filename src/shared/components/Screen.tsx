import { cn } from "@/shared/utils/cn";
import { type ReactNode } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ScreenProps = {
  children: ReactNode;
  className?: string;
  safeTop?: boolean;
};

export function Screen({ children, className, safeTop = true }: ScreenProps) {
  const insets = useSafeAreaInsets();
  return (
    <View
      className={cn("flex-1 bg-background", className)}
      style={safeTop ? { paddingTop: insets.top } : undefined}
    >
      {children}
    </View>
  );
}
