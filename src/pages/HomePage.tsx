import { Grid, Show, GridItem, Flex, Box } from '@chakra-ui/react'
import { GameGrid } from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenereList from '../components/GenereList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
  return (
    <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"` // 1024 pixels+
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr"
        }}
      >

        <Show above="lg">
          {/* // will be rendered for large screen and above  */}
          <GridItem area="aside" paddingX={5}>
            {" "}
            <GenereList />{" "}
          </GridItem>
        </Show>

        <GridItem area="main">
          <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={5}>
              <Box marginRight={5}>
              <PlatformSelector  />
            </Box>

            <SortSelector />
          </Flex>
            </Box>
          <GameGrid />
        </GridItem>
      </Grid>
  )
}

export default HomePage