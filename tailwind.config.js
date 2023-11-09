/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{vue,js}",
  ],
  theme: {
    colors: {
      black: '#333333',
      white: '#ffffff',
      mainYellow: '#FFBB18',
      green: '#006C51',
    },
    letterSpacing: {
      widest: '.5em',
    },
    extend: {},
  },
  plugins: [],
}
