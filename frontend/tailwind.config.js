/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '8rem',
      },
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000',
      'primary': {
        100: '#3ECF8E',
        200: '#28C880',
        300: '#13C173',
        400: '#00B965',
      },
      'dark': {
        100: '#5A5A5A',
        200: '#404040',
        300: '#393939'

      }
      // ...
    },
  },
  plugins: [],
}