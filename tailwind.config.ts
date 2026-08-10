import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#E9E5DC",
        ink: "#141311",
        cobalt: "#2B2BE6",
      },
      fontFamily: {
        display: ["var(--font-anton)", "Impact", "sans-serif"],
        sans: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jbmono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        brutal: "6px 6px 0 0 #141311",
        "brutal-sm": "4px 4px 0 0 #141311",
        "brutal-cobalt": "8px 8px 0 0 #2B2BE6",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 24s linear infinite",
        blink: "blink 1.2s step-end infinite",
        "spin-slow": "spin 16s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
