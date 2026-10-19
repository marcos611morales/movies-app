import "../../global.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { colorScheme } from "nativewind";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { queryClient } from "@/shared/api/query-client";
import { useThemeStore } from "@/shared/theme/theme-store";

const RootLayout = () => {
  const preference = useThemeStore((s) => s.preference);

  useEffect(() => {
    colorScheme.set(preference);
  }, [preference]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
