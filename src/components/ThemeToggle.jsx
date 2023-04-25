import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function ToggleTheme() {
  const { toggleColorMode, } = useColorMode()
  return (
    <IconButton
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      colorScheme={useColorModeValue('blue', 'yellow')}
      arial-label='Toggle button Theme'
      onClick={toggleColorMode}
    />
  )
} 
