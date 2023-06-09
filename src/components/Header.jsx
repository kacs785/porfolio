'use client'

import { Box, Heading, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box pl='2%' m='auto' mt={20} w='70%'>
      <Heading as='h2' p='2%' >
        Kacs
      </Heading>
      <Text textAlign='center'>
        Digital Craftsman ( Artist / Developer / Designer / Audiovisual Producer)
      </Text>
      <Box m={10} p='5' bg='#ffdadd' borderRadius='lg' >
        <Text
          color={useColorModeValue('#508080', '#000')}
          textAlign='center'
        >
          Hi! i&apos;m a full-stack developer, base in colombia
        </Text>
      </Box>
    </Box>
  )
}
