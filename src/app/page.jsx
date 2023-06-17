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
import Proyects from './sections/proyects'
export default function Home() {
  return (
    <Container fontSize={18}>

      <AnimationSection delay={0.2}>
        <Section title='About me'>
          Hi, I'm kevin Cruz Salazar,
          digital artist, audiovisual producer
          and full-stack developer, base in Colombia
          with a  appeased  for creating digital and visual products,
          the artificial intelligences, robotic and human-machine interactions
        </Section>
        <DevLang />

      </AnimationSection>

      <AnimationSection delay={0.4}>
        <Section title='Projects'>
          <Proyects />
        </Section>
      </AnimationSection>

      <AnimationSection delay={0.4}>
        <Section title='Bio'>
          <Table variant='simple'>
            <Tbody>
              <Tr>
                <Th>2018</Th>
                <Th>2019</Th>
              </Tr>
              <Tr>
                <Th>2018</Th>
                <Th>2019</Th>
              </Tr>
              <Tr>
                <Th>2018</Th>
                <Th>2019</Th>
              </Tr>

            </Tbody>
          </Table>
        </Section>
      </AnimationSection>

      <AnimationSection>
        <Section title='I♥' >
          Art, Music, Photography, Cine, Drawing.
        </Section>
      </AnimationSection>

    </Container >
  )
}
