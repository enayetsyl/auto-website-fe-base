/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: '#023047',
        primary: '#8ecae6',
        secondary: '#219ebc',
        textColor: '#ff0000',
        headerColor: '#ffb703',
        button: '#fb8500'
      },
    },
  },
  plugins: [],
}