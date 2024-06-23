/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      height: {
        screen: '100dvh',
      },
      boxShadow: {
        customShadow: '#1b1c1d 0 0 5px',
      },
    },
  },
  plugins: [],
};
