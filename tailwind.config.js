/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brandm: ['Montserrat', 'sans-serif'],
        brandb:["Anton", 'sans-serif'],
      },
       backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #012F80 0%, #7B26DA 100%)',
      },
    },
  },
  plugins: [],
}

