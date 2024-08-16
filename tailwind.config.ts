import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#5A3766",
          "secondary": "#41CDD6",
          "accent": "#F59E0B", // #FF5C00 custom this later
          "neutral": "#8d6799",
          "base-100": "#FFFFFF",
          
          "info": "#2094F3",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
          },
      },
    ],
  },
};
export default config;
