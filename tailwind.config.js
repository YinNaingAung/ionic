/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow:{
        'position':'0 10px 60px -15px rgba(10,10,0)'
      }
    },
  },
  plugins: [],
}
