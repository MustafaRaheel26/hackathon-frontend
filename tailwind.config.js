/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDefault: "#07619D",
        customGreen: "#84C226",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        fade: "fadeOut 3s ease-in-out",
      },
      keyframes: {
        fadeOut: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};

