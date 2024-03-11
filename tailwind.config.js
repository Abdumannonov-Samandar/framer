/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      serif: ["Inter", "sans-serif"],
    },
    colors: {
    },
    boxShadow: {
      'bg-sh' : '0px 4px 64px 0px rgba(0, 0, 0, 0.25)',
      'shadiw' : '0px 7px 24px 0px rgb(36, 38, 43)',
      'btn-shadow' : '10px 10px 25px -10px rgba(54, 83, 107, 0.25)',
    },
  },
  plugins: [],
};
