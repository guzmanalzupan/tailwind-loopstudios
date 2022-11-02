/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/index.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      screens: {
        'mobile': { 'raw': '(max-width: 576px)' }
      },
      fontFamily: {
        x: ['Poppins', 'sans-serif'],
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata', 'sans-serif']
      },
      letterSpacing: {
        widest: '0.3em'
      }
    },
  },
  plugins: [],
}
