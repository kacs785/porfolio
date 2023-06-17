'use client'
import { Stack, useColorModeValue, Container, Box, Link, Menu, MenuList, MenuItem, MenuButton, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import ToggleTheme from "./ThemeToggle";


export function NavMenu({ paths }) {
  return (
    <Box
      position='fixed'
      top={0}
      as='nav'
      w='100%'
      bg={useColorModeValue('#50505040', '#40406099')}
      style={{ backdropFilter: 'blur(5px)' }}
      zIndex={1}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.md'
        wrap='wrap'
        align='center'
        justify='space-between'
      >

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          w={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={5}
          mt={{ base: 4, nmd: 0 }}
        >
          {
            paths.map(({ route, label }) => (
              <Link key={route} href={route}>
                {label}
              </Link>
            )
            )
          }

        </Stack>
        <Box
          align='right'
          m={0}
          pr={1}
          width='container.md'
          display={{ base: 'block', md: 'none' }}
        >
          <ToggleNav paths={paths} />
        </Box>
        <ToggleTheme />
      </Container>
    </Box>

  )
}

export function ToggleNav({ paths }) {
  const linkPaths = [...paths]
  return (
    <Box  >
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          variant='outline'
        />
        <MenuList>
          {
            linkPaths.map(({ label, route }) => {
              return (
                <Link href={route} key={route}>
                  <MenuItem textDecoration='none'>
                    {label}
                  </MenuItem>
                </Link>

              )
            })}
        </MenuList>

      </Menu>

    </Box>
  )
}

