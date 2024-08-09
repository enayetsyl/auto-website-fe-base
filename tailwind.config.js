/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:  '#1D4ED8', // Default primary color
        secondary: '#D97706', // Default secondary color
      },
    },
  },
  plugins: [],
}