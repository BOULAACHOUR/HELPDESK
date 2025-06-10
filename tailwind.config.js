/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0A4D4D',
        'custom-gray': '#f3f4f6',
        'custom-red': '#dc2626',
      },
    },
  },
  plugins: [],
};