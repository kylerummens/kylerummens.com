const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-roboto-mono)', ...defaultTheme.fontFamily.mono],
      },
      borderRadius: {
        '4xl': '2rem'
      },
      colors: {
        'github': '#24292f',
        'github-graph-l0': '#ebedf0',
        'github-graph-l1': '#9be9a8',
        'github-graph-l2': '#40c463',
        'github-graph-l3': '#30a14e',
        'github-graph-l4': '#216e39',
        'github-graph-night-l0': '#2d333b',
        'github-graph-night-l1': '#0e4429',
        'github-graph-night-l2': '#006d32',
        'github-graph-night-l3': '#26a641',
        'github-graph-night-l4': '#39d353',
        'github-graph-outline': 'rgba(27, 31, 35, 0.06)',
        'github-graph-night-outline': 'rgba(255, 255, 255, 0.05)',
        'linkedin': '#0073b1',
        'twitter': '#1d9bf0',
        'stackoverflow': '#f48225',
        'instagram': '#f54295'
      },
      opacity: {
        '15': '.15',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ],
}
