/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: process.env.PRIMARY_COLOR || '#1D4ED8', // Default primary color
        secondary: process.env.SECONDARY_COLOR || '#D97706', // Default secondary color
      },
    },
  },
  plugins: [],
}