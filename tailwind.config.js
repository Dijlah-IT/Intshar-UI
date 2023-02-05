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
      "night-darker-bg": "#0e1621",
      white: "#fff",
      black: "#000",
      transparent: "transparent",
      "bg-text": "#00000085",
    },
    flexGrow: {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
    },
  },
  plugins: [],
};
