/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#2563EB', dark: '#0D1B2A' }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Lexend', 'sans-serif']
      }
    },
  },
  plugins: [],
};