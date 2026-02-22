/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#a3a3a3",
        tertiary: "#171717",
        "black-100": "#0a0a0a",
        "black-200": "#000000",
        "white-100": "#f5f5f5",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #1a1a1a",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
