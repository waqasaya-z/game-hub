import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner
} from "@chakra-ui/react";
import useGenere from "../Hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";


const GenereList = () => {
  const { data, isLoading, error } = useGenere();
  const genreId = useGameQueryStore(s => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);
  
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        {" "}
        Genres{" "}
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            {" "}
            <HStack>
              {" "}
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />{" "}
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === genreId ? "bold" : "normal"}
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="lg"
                variant="link"
              >
                {" "}
                {genre.name}{" "}
              </Button>
            </HStack>{" "}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenereList;
