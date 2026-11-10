import { cn } from "@/shared/utils/cn";
import { Text, type TextProps } from "react-native";

const variants = {
  display: "font-display-bold text-[30px] tracking-[-0.6px] text-text",
  title: "font-display-bold text-[22px] text-text",
  body: "font-body text-[15px] text-text",
  bodyStrong: "font-body-semibold text-[15px] text-text",
  caption: "font-body text-[13px] text-text-secondary",
  label: "font-body-semibold text-[12px] text-text",
  overline:
    "font-body-semibold text-[12px] uppercase tracking-[1px] text-text-muted",
  mono: "font-mono-medium text-[13px] text-text",
};

export type TextVariant = keyof typeof variants;

type AppTextProps = TextProps & {
  variant?: TextVariant;
  className?: string;
};

export function AppText({
  variant = "body",
  className,
  ...props
}: AppTextProps) {
  return <Text {...props} className={cn(variants[variant], className)} />;
}
