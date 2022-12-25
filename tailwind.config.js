/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem'
      },
      colors: {
        'github': '#24292f',
        'linkedin': '#0073b1',
        'twitter': '#1d9bf0',
        'stackoverflow': '#f48225'
      },
      opacity: {
        '15': '.15',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
