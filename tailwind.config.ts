import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'
import { addDynamicIconSelectors } from '@iconify/tailwind'

export default {
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter var', 'Inter', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        primary: colors.sky,
        gray: colors.zinc
      }
    }
  },
  plugins: [addDynamicIconSelectors()]
}
