import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vino: { DEFAULT: "#8E3B5C", dark: "#74304B" },
        rosa: { DEFAULT: "#D48FA6", claro: "#F2D7DF" },
        crema: "#F8F2EA",
        mimbre: "#C9A77C",
        tinta: "#3B2A2F",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
        script: ["var(--font-dancing)", "cursive"],
      },
      boxShadow: {
        suave: "0 10px 30px -12px rgba(142, 59, 92, 0.25)",
        "suave-lg": "0 20px 40px -14px rgba(142, 59, 92, 0.35)",
      },
      keyframes: {
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        flotar: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 30s linear infinite",
        flotar: "flotar 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
