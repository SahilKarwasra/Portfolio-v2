import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#08090A",
        panel: "#0F1011",
        raised: "#16171A",
        line: "rgba(255,255,255,0.08)",
        "line-strong": "rgba(255,255,255,0.14)",
        ink: "#F7F8F8",
        mute: "#8A8F98",
        go: "#00ADD8",
        "go-soft": "#7FDDF0",
      },
      fontFamily: {
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        crush: "-0.055em",
        tightest: "-0.035em",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
