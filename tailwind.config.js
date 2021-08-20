module.exports = {
  purge: ['./**/*.html','./**/*.js',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['"Libre Franklin"', 'sans-serif']
    },
    colors:{
      blue: { 
        pale: 'hsl(223, 100%, 88%)',
        DEFAULT: 'hsl(223, 87%, 63%)',
        dark: 'hsl(209, 33%, 12%)',
      },
      red: {
        DEFAULT: 'hsl(354, 100%, 66%)'
      },
      gray: {
        DEFAULT: 'hsl(0, 0%, 59%)'
      },
      white: {
        DEFAULT: 'hsl(0, 0%, 98%)'
      }
    },
    extend: {
      width: {
        '3.36':'21rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
