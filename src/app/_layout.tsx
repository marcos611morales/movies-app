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

import { useSettingsStore } from "@/features/settings/store/settings-store";
import { queryClient } from "@/shared/api/query-client";
import i18n from "@/shared/i18n/i18n";
import { useAppLanguage } from "@/shared/i18n/useAppLanguage";
import { useThemeStore } from "@/shared/theme/theme-store";
import { useThemeColors } from "@/shared/theme/useThemeColors";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  // Theme
  const preference = useThemeStore((s) => s.preference);
  const themeHydrated = useThemeStore((s) => s.hasHydrated);

  // Settings
  const settingsHydrated = useSettingsStore((state) => state.hasHydrated);

  // Language
  const appLanguage = useAppLanguage();

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

  const ready = (loaded || !!error) && themeHydrated && settingsHydrated;

  useEffect(() => {
    colorScheme.set(preference);
  }, [preference]);

  useEffect(() => {
    i18n.changeLanguage(appLanguage);
  }, [appLanguage]);

  useEffect(() => {
    if (ready) SplashScreen.hide();
  }, [ready]);

  if (!ready) return null;

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
