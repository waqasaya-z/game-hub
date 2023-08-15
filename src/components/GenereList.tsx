import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenere, { Genre } from "../Hooks/useGenere";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenereList = ( {onSelectGenre, selectedGenre} : Props ) => {
  const { data, isLoading, error } = useGenere();
  
  if (error) return null;
  if (isLoading) return <Spinner />

  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY='5px'>
            {" "}
            <HStack>
              {" "}
              <Image
                boxSize="32px"
                borderRadius={8}
                src={ getCroppedImageUrl(genre.image_background)}
              />{" "}
              <Button onClick={() => onSelectGenre(genre)} fontWeight={genre.id === selectedGenre?.id ? 'bold' :'normal' } fontSize='lg' variant='link'> {genre.name} </Button>
            </HStack>{" "}
          </ListItem>
        ))}
      </List>
    </>  
  );
};

export default GenereList;
