import { useColorScheme } from "nativewind";
import { Colors } from "./colors";

export function useThemeColors() {
  const { colorScheme } = useColorScheme();

  return Colors[colorScheme ?? "dark"];
}
