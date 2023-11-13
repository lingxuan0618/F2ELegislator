/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{vue,js}",
  ],
  theme: {
    // 要寫在extend才不會把原本設定的洗掉
    extend: {
      colors: {
        mainBlack: '#333333',
        white: '#ffffff',
        mainYellow: '#FFBB18',
        green: '#006C51',
        yellow: '#FFBB1866',
        lightYellow: '#FFF7E6',
        gray: '#BEBEBE',
        blue: '#006491',
      },
      letterSpacing: {
        wider: '.25rem',
        widest: '.5rem',
      },
      fontSize: {
        '10': '0.625rem',
        '28': '1.75rem',
        '40': '2.5rem',
        '64': '4rem',
        '92': '5.75rem',
      },
      borderRadius: {
        '4xl': '65px',
      },
      height: {
        '60': '4rem',
      },
      rotate: {
        '9': '9deg',
      },
      borderWidth: {
        '12': '0.75rem'
      },
    },
  },
  plugins: [],
}

