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
      'btn-shadow' : '0px 7px 14px 0px rgb(234, 234, 234)',
    },
  },
  plugins: [],
};
