module.exports = {
  mode:"jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-blue": "#4092CF"
      },
      spacing: {
        '35': '7rem'
      },
      maxWidth:{
        'ls': '20rem'
      },
<<<<<<< HEAD
=======
      fontWeight:{
        'semiMedium': '400'
      },
>>>>>>> b4235cf851611d1f0c7a207f030522dcf424e0e9
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
