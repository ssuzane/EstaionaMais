/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'Fundo' : "url('./img/fundo.svg')"
      }
    },
  },
  plugins: [],
}