/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["selector", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: {
          DEFAULT: "var(--primary)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
        },
      },
    },
  },
  plugins: [],
};
