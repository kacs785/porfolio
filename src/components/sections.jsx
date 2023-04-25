'use client'

import { Box, Heading, Text } from "@chakra-ui/react"
import { Children } from "react"

export default function Section({ children, title }) {
  return (
    <Box>
      <Heading as='h3' variant='section-title'>
        {title}
      </Heading>
      <Text p={3}>
        {children}
      </Text>
    </Box >
  )
}
