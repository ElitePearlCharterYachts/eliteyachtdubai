/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ['"Playfair Display"', "serif"],
        nav: ["Montserrat", "system-ui", "sans-serif"],
      },
      colors: {
        eliteGold: "#f2d6a2", // soft gold for hover/active text
        eliteBlue: "#2596be", // your requested blue accent
      },
    },
  },
  plugins: [],
};
