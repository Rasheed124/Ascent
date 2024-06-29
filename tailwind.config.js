const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [],
}