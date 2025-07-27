/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
       colors: {
        primary: '#002E5B',     // Dark Navy Blue
        accent: '#F26522',      // Orange
        heading: '#1D4C88',     // Steel Blue
        muted: '#5A5A5A',       // Text Gray
        bg: '#F5F7FA',          // Light Background Gray
      }
    },
   
  },
  plugins: [],
}

