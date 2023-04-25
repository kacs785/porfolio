'use client'
import { Container } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import DevLang from './sections/devLang'
import { AnimationSection } from '../components/animationSection'
import Header from '../components/Header'
import Section from '../components/sections'

import {
  Table,
  Tbody,
  Tr,
  Th,
  TableContainer,
} from '@chakra-ui/react'
export default function Home() {
  return (
    <Container fontSize={18}>
      <Tabs>
      </Tabs>
      <AnimationSection delay={0.2} >
        <Section title='About me'>
          Hi, I'm kevin alejandro cruz salazar,
          digital artist, audiovisual producer
          and full-stackdeveloper, base in Colombia
          with a passion for creating digital and visual products
        </Section>
        <DevLang />
      </AnimationSection>

      <AnimationSection delay={0.4}>
        <Section title='Work'>
          works
        </Section>
      </AnimationSection >

      <AnimationSection delay={0.8}>
        <Section title='Bio'>
          <TableContainer>
            <Table variant='simple'  >
              <Tbody>

                <Tr>
                  <Th>2020</Th>
                  <Th>2020</Th>
                </Tr>
                <Tr>
                  <Th>2020</Th>
                  <Th>2020</Th>
                </Tr>
                <Tr>
                  <Th>2020</Th>
                  <Th>2020</Th>
                </Tr>

              </Tbody>
            </Table>
          </TableContainer>
        </Section>
      </AnimationSection>

      <AnimationSection>
        <Section title='I♥'>
          Art,Music,Photografi,Cine,Drawing
        </Section>
      </AnimationSection>

    </Container >
  )
}
