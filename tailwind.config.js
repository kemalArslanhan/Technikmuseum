/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'dynamic-pattern': "url('../images/dynamic.png')",
      },
      // Animasyon tanımı eklemek için
      keyframes: {
        slide: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 0%' },
        },
      },
      animation: {
        'slide-10s-linear-infinite': 'slide 10s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

