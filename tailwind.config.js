/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        dealingBlue: '#4577fb',
        dealingLightBlue: '#28c3ff',
        dealingGradient: 'linear-gradient(90deg,#4577fb,#28c3ff)'
      }
    },
  },
  plugins: [],
}

