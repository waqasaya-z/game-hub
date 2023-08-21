import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner
} from "@chakra-ui/react";
import useGenere, { Genre } from "../Hooks/useGenere";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenereList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenere();

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
                onClick={() => onSelectGenre(genre)}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
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
