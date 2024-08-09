/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: '#f7f7f7',
        primary: '#2e86c1',
        secondary: '#a6acaf',
        textColor: '#333333',
        headerColor: '#2CA58D',
        button: '#1f618d'
      },
    },
  },
  plugins: [],
}