/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#f5f3ff',
          500: '#7c3aed'
        }
      }
    }
  },
  plugins: []
}
