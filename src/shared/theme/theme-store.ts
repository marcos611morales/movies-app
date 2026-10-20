import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type ThemePreference = "system" | "light" | "dark";

interface ThemeState {
  preference: ThemePreference;
  hasHydrated: boolean;
  setPreference: (preference: ThemePreference) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      preference: "system",
      hasHydrated: false,
      setPreference: (preference) => {
        set({ preference });
      },
    }),
    {
      name: "theme-preference",
      storage: createJSONStorage(() => AsyncStorage),

      partialize: (state) => ({
        preference: state.preference,
      }),

      onRehydrateStorage: () => () => {
        useThemeStore.setState({ hasHydrated: true });
      },
    },
  ),
);
