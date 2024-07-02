/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008037',
        secondary: '#b3d9b7'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}