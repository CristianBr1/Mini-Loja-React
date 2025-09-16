/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // dark mode via 'class'
  theme: {
    extend: {
      colors: {
        primary: '#3b82f7',
        secondary: '#f59e0b',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.1)',
        cardDark: '0 2px 8px rgba(255,255,255,0.1)',
      },
    },
  },
  plugins: [],
};


