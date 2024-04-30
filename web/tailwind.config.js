/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './[catalog]/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gradientStart': 'rgba(234,213,212,0.7)',
        'gradientEnd': 'rgba(231,214,192,0.7)'
      },
      backgroundColor: {
        'main': '#fcf9f4',
        'primary': '#ead5d4',
        'secondary': '#E7D6C0',
        'quaternary': '#463a3c',
      },
      textColor: {
        'primary': '#463a3c',
        'secondary': '#fcf9f4',
      },
      borderColor: {
        'primary': '#463a3c',
      },
      placeholderColor: {
        'primary': '#463a3c',
      },
    },
  },
  plugins: [],
};
