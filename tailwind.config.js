/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Bloomberg Arabic", "sans-serif"],
    },
    colors: {
      primary: "#FEC200",
      secondary: "#F4CF4B",
      bg: "#D1D2D64F",
      "darker-bg": "#D9D9D9",
      "night-bg": "#1E2F47",
      "night-darker-bg": "#1E2F47",
      white: "#fff",
      black: "#000",
    },
  },
  plugins: [],
};
