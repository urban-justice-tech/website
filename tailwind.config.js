/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './**/*.md',
    './**/*.html'
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
        '4xl': '1920px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}


