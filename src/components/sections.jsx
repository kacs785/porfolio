'use client'

import { Box, Heading, Text } from "@chakra-ui/react"

export default function Section({ children, title }) {
  return (
    <Box>
      <Heading as='h3' variant='section-title'>
        {title}
      </Heading>
      <Text align='center' p={5}>
        {children}
      </Text>
    </Box >
  )
}
