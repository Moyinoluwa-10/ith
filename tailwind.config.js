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
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#cf95fe",
        secondary: "#4400fe",
        tertiary: "#1d123c",
      },
    },
  },
  plugins: [],
};

