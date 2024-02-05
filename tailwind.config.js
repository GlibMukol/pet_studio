/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480",
      md: "768px",
      lg: "976",
      xl: "1440",
    },
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        alata: ["Alata"],
      },
    },
  },
  plugins: [],
};
