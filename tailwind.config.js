/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f1606",
        primary_100: "#929C89",
        secondary: "#93ca42",
        secondary_100: "#6ca813",
        gray: "#222222",
        light_gray: '#e5e5e5',
      },
    },
    container: {
      center: true,
    },
    brightness: {
      25: '.25',
      50: '.5',
      175: '1.75',
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      serif: ["Roboto Slab", "serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
