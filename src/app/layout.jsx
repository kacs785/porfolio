'use client'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { CacheProvider } from "@chakra-ui/next-js";
import { Font } from '../../lib/font'
import { theme } from '../../lib/Theme'
import Header from '../components/Header';
import { NavMenu } from '../components/navMenu'
import { AnimationSection } from '../components/animationSection';
const paths = [
  {
    "label": "Home",
    "route": "/"
  },
]
export default function RootLayout({ children }) {
  return (
    <body>
      <head />
      <div>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <NavMenu paths={paths} />
            <Font />
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <AnimationSection delay={0.1}>
              <Header />
            </AnimationSection>
            {children}
          </ChakraProvider>
        </CacheProvider>
      </div>
    </body>
  )
}
