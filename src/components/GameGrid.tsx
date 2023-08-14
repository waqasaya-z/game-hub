import { Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";

export const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text> {error} </Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}> {game.name} </li>
        ))}
      </ul>
    </>
  );
};
