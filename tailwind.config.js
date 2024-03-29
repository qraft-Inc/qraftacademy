module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-blue": "#4092CF",
      },
      spacing: {
        35: "7rem",
      },
      maxWidth: {
        ls: "20rem",
      },
      fontWeight: {
        semiMedium: "400",
      },
      fontWeight: {
        semiMedium: "400",
      },
      screens: {
        xsm: "390px",
        // => @media (min-width: 390px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base" // only generate global styles
    }),
    require("tw-elements/dist/plugin"),
  ],
};
