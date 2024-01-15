const colors = require('tailwindcss/colors')
const { addDynamicIconSelectors } = require('@iconify/tailwind')
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        gray: colors.slate
      }
    }
  },
  plugins: [addDynamicIconSelectors()]
}
