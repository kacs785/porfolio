'use client'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { Font } from '../../lib/font'
import { theme } from '../../lib/Theme'
import Header from '../components/Header';
import { NavMenu } from '../components/navMenu'
import { AnimationSection } from '../components/animationSection';
import Model3D from '../components/model3D';
const paths = [
  {
    "label": "Home",
    "route": "/"
  },
]
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <ChakraProvider theme={theme}>

          <NavMenu paths={paths} />
          <AnimationSection delay={0.1}>
            <Header />
          </AnimationSection>
          <Font />
          <ColorModeScript />
          {children}

        </ChakraProvider>
      </body>
    </html>
  )
}
