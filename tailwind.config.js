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
    "./public/**/*.html",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",        
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",    
    "./node_modules/some-library/**/*.{js,ts,jsx,tsx}",    
    "./content/**/*.{md,mdx}",    
    "./scripts/**/*.{js,ts}"
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
        heading: ['var(--font-baron-neue)'],
        default: ['var(--font-lato)'],
      },

      minHeight: {
        ...defaultTheme.height,
      },
      minWidth: {
        ...defaultTheme.width,
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true, // Enables future-proof hover behavior
  },
};
