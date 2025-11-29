/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class', // <--- TO JEST KLUCZOWE
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Opcjonalnie: jeśli chcesz ładniejszą czcionkę, dodaj import w index.html
      }
    },
  },
  plugins: [],
}