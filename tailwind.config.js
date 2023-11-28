/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'p0-xs': '0px',
        'p-xs': '375px',

        'p0-3xl': '0px',
        'p-3xl': '375px',
      }
    },
  },
  plugins: [],
}