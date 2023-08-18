/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./about/**/*.{html,js}",
    "./contact/**/*.{html,js}",
    "./donate/**/*.{html,js}",
  ],
  theme: {
    fontFamily: {
      u8: ["U8-Bold", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};

