/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sanspp: ["Object Sans", "sans-serif"],
      },
      colors: {
        // Agrega o modifica colores según tus necesidades
        customCheckbox: '#6EE7B7',
      },
    },
  },
  plugins: [],
};
