/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        InterRegular: ['InterRegular'],
        InterMedium: ['InterMedium'],
        InterSemiBold: ['InterSemiBold'],
        InterBold: ['InterBold'],
      },
    },
  },
  plugins: [],
};
