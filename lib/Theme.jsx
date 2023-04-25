import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'


const style = {
  global: props => ({
    html: {
      bg: mode('#f0e7db', '#202023')(props),
      with: 0,
    }
  })

}
const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 22,
        textUnderlineOffset: 6,
        textDecorationColor: '#505050',
        marginTop: 3,
        marginButtom: 4
      },
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#151515', '#ff63c3')(props),
      textUnderlineOffset: 3,
      fontSize: 18,
    })
  }
}


const font = {
  heading: '"M PLUS Rounded 1c"',
  fontSize: 30,
}

const colors = {
  glassTeal: '#88ccca'
}
const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

export const theme = extendTheme({ config, style, components, font, colors })

