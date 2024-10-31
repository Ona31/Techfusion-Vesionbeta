/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui'],
        'serif': ['Merriweather', 'serif'],
      },
      colors: {
        customPink: '#3a27778',
      },
      // Custom themes if needed
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
