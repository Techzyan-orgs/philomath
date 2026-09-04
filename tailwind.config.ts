import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            50: "#EEF2FF",
            100: "#E0E7FF",
            200: "#C7D2FE",
            300: "#A5B4FC",
            400: "#818CF8",
            500: "#6366F1",
            600: "#4338CA",
            700: "#1D4ED8",
            800: "#1E1B4B",
            900: "#0B0367", // Official Philomath Dark Navy
            950: "#050138",
          },
          amber: {
            50: "#FFFBEB",
            100: "#FEF3C7",
            200: "#FDE68A",
            300: "#FCD34D",
            400: "#FBBF24",
            500: "#FF6300", // Official Philomath Orange/Accent
            600: "#EA580C",
            700: "#C2410C",
            800: "#9A3412",
            900: "#7C2D12",
          },
          blue: {
            DEFAULT: "#0000CC", // Official Philomath Royal Blue
            light: "#2563EB",
            dark: "#000099",
          },
        },
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "'Helvetica Neue'",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        "glow-amber": "0 0 25px -5px rgba(255, 99, 0, 0.35)",
        "glow-blue": "0 0 25px -5px rgba(0, 0, 204, 0.35)",
        "subtle": "0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 4px 16px -4px rgba(0, 0, 0, 0.08)",
      },
      keyframes: {
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        progress: "progress linear forwards",
      },
    },
  },
  plugins: [],
};

export default config;
