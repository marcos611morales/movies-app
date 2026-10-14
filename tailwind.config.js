/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-elevated": "rgb(var(--surface-elevated) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        overlay: "var(--overlay)",

        text: "rgb(var(--text) / <alpha-value>)",
        "text-secondary": "rgb(var(--text-secondary) / <alpha-value>)",
        "text-muted": "rgb(var(--text-muted) / <alpha-value>)",

        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-pressed": "rgb(var(--primary-pressed) / <alpha-value>)",
        "on-primary": "rgb(var(--on-primary) / <alpha-value>)",
        "primary-text": "rgb(var(--primary-text) / <alpha-value>)",

        accent: "rgb(var(--accent) / <alpha-value>)",

        success: "rgb(var(--success) / <alpha-value>)",
        warning: "rgb(var(--warning) / <alpha-value>)",
        error: "rgb(var(--error) / <alpha-value>)",

        rating: {
          high: "rgb(var(--rating-high) / <alpha-value>)",
          mid: "rgb(var(--rating-mid) / <alpha-value>)",
          low: "rgb(var(--rating-low) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
