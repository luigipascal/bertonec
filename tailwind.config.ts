import type { Config } from "tailwindcss";

const config: Config = {
  content: [./src/**/*.{ts,tsx}],
  darkMode: "class",
  theme: {
    extend: {
      colors: { brand: { DEFAULT: "#2563EB", dark: "#0D1B2A" } },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Lexend", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
