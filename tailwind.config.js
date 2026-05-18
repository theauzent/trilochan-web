/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0f172a',
        'brand-blue': '#1e3a8a',
        'brand-green': '#16a34a',
        'brand-light': '#f8fafc',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Aap chaho to Google Fonts se Inter font link kar sakte ho HTML me
      }
    },
  },
  plugins: [],
}