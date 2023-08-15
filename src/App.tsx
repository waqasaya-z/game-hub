import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import { GameGrid } from './components/GameGrid'
import GenereList from './components/GenereList'
import { useState } from 'react'
import { Genre } from './Hooks/useGenere'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

  return (
    <>
     <Grid templateAreas={{ 
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"` // 1024 pixels+
    }} 
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}
    >
      <GridItem area='nav'> 
      <NavBar />
       </GridItem>

      <Show above='lg'> 
       {/* // will be rendered for large screen and above  */}
      <GridItem area='aside' paddingX={5}> <GenereList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} /> </GridItem>
      </Show>
  
      <GridItem area='main'> 
      <GameGrid selectedGenre={selectedGenre}/>
       </GridItem>
     </Grid>
    </>
  )
   
}

export default App
