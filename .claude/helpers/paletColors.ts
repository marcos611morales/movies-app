export const Colors = {
  dark: {
    background: "#0E0D0C",
    surface: "#181614",
    surfaceElevated: "#221F1C",
    border: "#2E2A26",
    overlay: "rgba(14,13,12,0.72)",
    text: "#F4EFE8",
    textSecondary: "#B3ABA1",
    textMuted: "#857C72",
    primary: "#F5B841",
    primaryPressed: "#D99A22",
    onPrimary: "#1A1305",
    primaryText: "#F5B841",
    accent: "#E5484D",
    success: "#46C47E",
    warning: "#F5B841",
    error: "#E5484D",
    rating: { high: "#46C47E", mid: "#F5B841", low: "#E5484D" },
  },
  light: {
    background: "#FAF7F2",
    surface: "#FFFFFF",
    surfaceElevated: "#F2EDE5",
    border: "#E4DDD2",
    overlay: "rgba(255,255,255,0.85)",
    text: "#1A1714",
    textSecondary: "#5C554D",
    textMuted: "#766E64",
    primary: "#F2AE2E",
    primaryPressed: "#D99A22",
    onPrimary: "#1A1305",
    primaryText: "#8A5A00",
    accent: "#C9363C",
    success: "#1F8A50",
    warning: "#9A6500",
    error: "#C9363C",
    rating: { high: "#1F8A50", mid: "#9A6500", low: "#C9363C" },
  },
} as const;

export type ThemeColors = typeof Colors.dark;

// vote_average (0–10) → color
export const ratingColor = (vote: number, c: ThemeColors) =>
  vote >= 7 ? c.rating.high : vote >= 5 ? c.rating.mid : c.rating.low;

// Uso:
// const scheme = useColorScheme() ?? 'dark';
// const c = Colors[scheme];
