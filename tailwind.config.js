/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        flipHorizontal: {
          '50%': { transform: 'rotateY(180deg)' },
        },
      },

    },
    animation: {
      hflip: 'flipHorizontal 2s ',

    },
    plugins: [],
  }
}