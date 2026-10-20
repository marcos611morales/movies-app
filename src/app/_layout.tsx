import "../../global.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import { StatusBar } from "expo-status-bar";
import { colorScheme, useColorScheme } from "nativewind";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import {
  BricolageGrotesque_500Medium,
  BricolageGrotesque_700Bold,
} from "@expo-google-fonts/bricolage-grotesque";
import {
  InstrumentSans_400Regular,
  InstrumentSans_500Medium,
  InstrumentSans_600SemiBold,
} from "@expo-google-fonts/instrument-sans";
import {
  JetBrainsMono_400Regular,
  JetBrainsMono_500Medium,
} from "@expo-google-fonts/jetbrains-mono";

import { queryClient } from "@/shared/api/query-client";
import { useThemeStore } from "@/shared/theme/theme-store";
import { useThemeColors } from "@/shared/theme/useThemeColors";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const preference = useThemeStore((s) => s.preference);
  const { colorScheme: activeColorScheme } = useColorScheme();
  const colors = useThemeColors();

  const [loaded, error] = useFonts({
    BricolageGrotesque_500Medium,
    BricolageGrotesque_700Bold,
    InstrumentSans_400Regular,
    InstrumentSans_500Medium,
    InstrumentSans_600SemiBold,
    JetBrainsMono_400Regular,
    JetBrainsMono_500Medium,
  });

  useEffect(() => {
    colorScheme.set(preference);
  }, [preference]);

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;

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
