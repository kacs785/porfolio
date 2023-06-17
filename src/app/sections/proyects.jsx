import { Tabs, Tab, TabList, TabPanels, TabPanel, Box } from "@chakra-ui/react"
import responseRepos from '../../mocks/response-repos.json'

export default function Proyects() {
  const repos = responseRepos.repos
  return (

    <Tabs>
      <TabList>
        <Tab>Programing</Tab>
        <Tab>3D</Tab>
        <Tab>Videography</Tab>
      </TabList>
      <TabPanels>
        <TabPanel display='flex' alignItems='center' flexDir='row' flexWrap="nowrap" gap={5}>
          {

            repos.map((repo) => (
              <Box
                key={repo.id}
                border='1px'
                borderColor="red"
                borderRadius={5}
                p={2}
              >
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>

              </Box>
            ))
          }
        </TabPanel>

        <TabPanel>

        </TabPanel>

        <TabPanel>

        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
