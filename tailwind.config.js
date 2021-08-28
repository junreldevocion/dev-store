module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#E2E5E8',
          200: '#8591A1',
          DEFAULT: '#0A2342',
          dark: '#091F3C',
          800: '#05152B'
        },
        secondary: {
          light: '#E6F4F1',
          200: '#96D2C6',
          DEFAULT: '#2CA58D',
          dark: '#279D85',
          800: '#1B8A70'
        },  
        light: '#FFFFFF'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
