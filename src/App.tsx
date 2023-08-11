import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {

  return (
    <>
     <Grid templateAreas={{ 
      base: `"nav nav" "aside main"`,
      lg: `"nav nav" "aside main"` // 1024 pixels+
    }} >
      <GridItem area='nav' bg='coral'> Nav </GridItem>
      <Show above='lg'> 
       {/* // will be rendered for large screen and above  */}
      <GridItem area='aside' bg='gold'> Aide </GridItem>
      </Show>
  
      <GridItem area='main' bg='dodgerblue'> Main </GridItem>
     </Grid>
    </>
  )
   
}

export default App
