/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        'charcoal': '#333333',
        'navy': '#1e3a8a',
        'electric-blue': '#3b82f6',
      }
    },
  },
  plugins: [],
} 