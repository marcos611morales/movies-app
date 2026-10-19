import "../../global.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { colorScheme, useColorScheme } from "nativewind";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { queryClient } from "@/shared/api/query-client";
import { useThemeStore } from "@/shared/theme/theme-store";
import { useThemeColors } from "@/shared/theme/useThemeColors";

const RootLayout = () => {
  const preference = useThemeStore((s) => s.preference);
  const { colorScheme: activeColorScheme } = useColorScheme();
  const colors = useThemeColors();

  useEffect(() => {
    colorScheme.set(preference);
  }, [preference]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: colors.background },
          }}
        />

        <StatusBar style={activeColorScheme === "light" ? "dark" : "light"} />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
