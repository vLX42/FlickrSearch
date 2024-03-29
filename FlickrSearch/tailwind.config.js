module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      portrait: { raw: '(orientation: portrait)' },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },

    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
