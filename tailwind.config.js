const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  enabled: true,
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        linen: '#f3e9dc',
        'rich-black': '#073b3a',
        'forest-green-web': '#248232',
        'green-pantone': '#2ba84a',
        'steel-teal': '#62929e',
      },
      gridTemplateRows: {
        basic: 'auto 1fr auto',
      },
      boxShadow: {
        top: '0px 0 6px rgba(0, 0, 0, 0.6)',
        underline: 'inset 0 -2px #00754a',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
