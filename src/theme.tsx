import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
})

const theme = extendTheme({
  colors: {
    black: '#16161D',
    bg: '#89B0AE',
    bgDark: '#5B7E7A',
    bege: '#F3D9BC',
    begeDark: "#EDCD9F",
    bege100: '#FCFAEF'
  },
  fonts,
  breakpoints,
})

export default theme
