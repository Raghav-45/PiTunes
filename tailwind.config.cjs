/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: 'Proxima Nova',
    container: {
      center: true
    },
    extend: {
      colors: {
        'green': '#1DB954',
        'dark': '#121212',
        'Darkest': '#191414',
        'light': '#282828',
        'lightest': '#B3B3B3',
      }
    },
  },
  plugins: [],
}
