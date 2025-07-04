const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables dark mode using the `class` strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#62A8F9",
          200: "#0978F3",
          300: "#1A367F",
          400: "#0B1724",
        },
      },
      fontFamily: {
        heading: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        default: ["var(--font-lato)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true, // Enables future-proof hover behavior
  },
};
