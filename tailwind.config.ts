import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F5EF",
        ink: "#000000",
        sun: "#FFD23F",
        droid: "#3DDC84",
        violet: "#9D84FF",
        sky: "#5CC8FF",
        pink: "#FF90E8",
      },
      fontFamily: {
        display: ["var(--font-archivo-black)", "Impact", "Arial Black", "sans-serif"],
        sans: ["var(--font-archivo)", "Arial", "Helvetica", "sans-serif"],
      },
      borderWidth: {
        3: "3px",
      },
      boxShadow: {
        nb: "6px 6px 0 0 #000",
        "nb-sm": "4px 4px 0 0 #000",
        "nb-lg": "10px 10px 0 0 #000",
        "nb-xl": "14px 14px 0 0 #000",
        "nb-press": "2px 2px 0 0 #000",
        none: "none",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        blink: "blink 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
