/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          50: '#e0f7fa',
          100: '#b2ebf2',
          200: '#80deea',
          300: '#4dd0e1',
          400: '#26c6da',
          500: '#01afeb', // Couleur cyan principale
          600: '#00acc1',
          700: '#0097a7',
          800: '#00838f',
          900: '#006064',
        },
        logo: {
          white: '#ffffff',
          nearWhite: '#fefefe',
          lightGrayWhite: '#fdfdfd',
          lightCyan: '#76e4ff',
          skyBlue: '#00b6e8',
          brightCyan: '#01afeb',
          turquoiseBlue: '#0bc5ee',
          mediumBlue: '#18a2e0',
          red: '#e61e29',
        },
      },
      keyframes: {
        'flip-bounce': {
          '0%': {
            transform: 'translateY(0) rotateY(0deg)',
          },
          '20%': {
            transform: 'translateY(-10px) rotateY(360deg)',
          },
          '40%': {
            transform: 'translateY(0) rotateY(360deg)',
          },
          '70%': {
            transform: 'translateY(-5px) rotateY(0deg)',
          },
          '100%': {
            transform: 'translateY(0) rotateY(0deg)',
          },
        },
      },
      animation: {
        'flip-bounce': 'flip-bounce 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}