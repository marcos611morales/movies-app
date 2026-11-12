import type { LanguagePreference } from "@/shared/i18n/languages";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface SettingsState {
  language: LanguagePreference;
  hasHydrated: boolean;
  setLanguage: (language: LanguagePreference) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      language: "system",
      hasHydrated: false,
      setLanguage: (language) => {
        set({ language });
      },
    }),
    {
      name: "settings",
      storage: createJSONStorage(() => AsyncStorage),

      partialize: (state) => ({
        language: state.language,
      }),

      onRehydrateStorage: () => () => {
        useSettingsStore.setState({ hasHydrated: true });
      },
    },
  ),
);
