import { ChakraProvider } from '@chakra-ui/react'
import FacebookPixel from '../components/FacebookPixel'

import theme from '../theme'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <FacebookPixel>
      <Component {...pageProps} />
      </FacebookPixel>
    </ChakraProvider>

  )
}

export default MyApp
