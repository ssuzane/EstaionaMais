/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'imageFundo' : "url('./img/imgFundo.svg')"
      }
    },
  },
  plugins: [],
}