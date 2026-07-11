/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./components.js"],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0f172a',
        'brand-blue': '#1e3a8a',
        'brand-green': '#16a34a',
        'brand-light': '#f8fafc',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // You can link the Inter font from Google Fonts in your HTML if desired
      }
    },
  },
  plugins: [],
}