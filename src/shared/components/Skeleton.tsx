import { cn } from "@/shared/utils/cn";
import { cssInterop } from "nativewind";
import { useEffect } from "react";
import type { ViewProps, ViewStyle } from "react-native";
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withRepeat,
  withTiming,
  type AnimatedStyle,
} from "react-native-reanimated";

type SkeletonViewProps = ViewProps & {
  animatedStyle: AnimatedStyle<ViewStyle>;
};

function SkeletonView({ style, animatedStyle, ...props }: SkeletonViewProps) {
  return (
    <Animated.View
      {...props}
      cssInterop={false}
      style={[style, animatedStyle]}
    />
  );
}

// Resuelve las clases antes de combinar estilos para conservar el tamaño y el color.
const AnimatedView = cssInterop(SkeletonView, { className: "style" });

type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className }: SkeletonProps) {
  const reduceMotion = useReducedMotion();
  const opacity = useSharedValue(reduceMotion ? 0.7 : 1);

  useEffect(() => {
    if (reduceMotion) return;

    opacity.value = withRepeat(withTiming(0.5, { duration: 800 }), -1, true);

    return () => cancelAnimation(opacity);
  }, [reduceMotion, opacity]);

  const animatedStyle = useAnimatedStyle(() => ({ opacity: opacity.value }));

  return (
    <AnimatedView
      className={cn("bg-surface-elevated", className)}
      animatedStyle={animatedStyle}
      accessible={false}
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
    />
  );
}
