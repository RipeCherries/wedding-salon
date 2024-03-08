/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main': '#fcf9f4',
        'primary': '#ead5d4',
        'secondary': '#E7D6C0',
      },
      textColor: {
        'primary': '#463a3c',
      },
    },
  },
  plugins: [],
};
