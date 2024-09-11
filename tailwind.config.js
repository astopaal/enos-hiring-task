/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      navbarBackground: "#296573",
      navbarText: "#fff",
      borderGray: "#DBDFE9",
      black: "#000",
      cardText: "#313131",
      degree: "#296573",
      tableHeaderText : "#071437",
      tableHeaderBg : "#FCFCFC",
      tableBorder : "#F1F1F4",
      tableThText : "#4B5675"
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
