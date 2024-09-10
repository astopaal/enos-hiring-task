/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: { navbarBackground: "#296573", navbarText: "#fff" },
    fontFamily: {
      'inter': ['Inter', 'sans-serif']
    }
  },
  plugins: [],
}