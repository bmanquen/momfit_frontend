/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        averia_serif_light: ["var(--font-averia-serif)"],
      },
    },
  },
  plugins: [],
};
