import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#FAF3F3",
          100: "#F5E8E8",
          200: "#EADDD3",
          300: "#E6C4C4",
          400: "#D4A5A5",
          500: "#C68E8E",
          600: "#B07777",
        },
        gold: {
          400: "#F3E5AB",
          500: "#D4AF37",
          600: "#B8860B",
        },
        cream: "#FFFDF9",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;