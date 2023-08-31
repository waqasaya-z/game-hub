import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { GameGrid } from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenereList from "./components/GenereList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"` // 1024 pixels+
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr"
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>

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
    </>
  );
}

export default App;
