import { transform } from "next/dist/build/swc";
import { Quicksand } from "next/font/google";
import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* font */
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        ubuntu: ["Ubuntu", "sans"],
      },

      /* background-images for Desktop and mobile */
      backgroundImage: {
        "header-pattern": "url('/stacked-steps.svg')",
        "header-pattern-phone": "url('/stacked-steps-mobile.svg')",
      },

      /* animation styles */
      animation: {
        "sticky-nav":
          "sticky-nav 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "gradient-animation": "gradient-animation 30s ease infinite",
        "slide-panel": "slide-panel 0.5s linear forwards",
      },

      /* animation keyframes styles */
      keyframes: {
        /* sticky-nav animation */
        "sticky-nav": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            boxShadow: "0 0 0.75rem rgba(0, 0, 0, 0.5)",
          },
        },
        /*gradient-animation */
        "gradient-animation": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "slide-panel": {
          from: { transform: "skewY(180deg)" },
          to: { transform: "skewY(0deg)" },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};
export default config;

// this plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
