module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#718096',
        secondary: '#4A5568',
        accent: '#2D3748',
        teal: '#319795',
        jungle: '#38B2AC',
        'light-teal': '#E6FFFA',
        'light-green': '#81E6D9',
      },
      fontFamily: {
        'lato-medium': ['LatoMedium'],
        'lato-regular': ['LatoRegular'],
        'lato-semibold': ['LatoSemibold'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
