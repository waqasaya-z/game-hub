import { SimpleGrid, Text, Spinner } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export const GameGrid = () => {

  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text> {error.message} </Text>;

  const fetchGamesCount = data?.pages.reduce(
    (acc, page) => acc + page.results.length,
     0
     ) || 0;

  return (
    <InfiniteScroll
       dataLength={fetchGamesCount} //This is important field to render the next data
       next={() => fetchNextPage()}
       hasMore={!!hasNextPage}
       loader={<Spinner />}
      >
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding='10px'
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            {" "}
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.results.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
        </React.Fragment>
      ))}
   
   </SimpleGrid>
   </InfiniteScroll>
  );
};
