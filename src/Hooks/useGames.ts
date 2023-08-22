import { GameQuery } from "../App";
import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import ms from 'ms';

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform}[];
    metacritic: number;
    rating_top: number;
    rating: number;
}


// const useGames =  (gameQuery: GameQuery) => 
// useData<Game>('/games', {
//     , 
//     [gameQuery]);

const apiClient = new APIClient<Game>('./games');

const useGames = (gameQuery: GameQuery) => {
    return useInfiniteQuery<FetchResponse<Game>, Error>({
     queryKey: ['games', gameQuery],
     queryFn: ({ pageParam = 1 }) => apiClient.getAll({
        params: { 
            genres: gameQuery.genreId, 
            parent_platforms: gameQuery.platformId,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam
                   },
     }),
     staleTime: ms('24h'), // 24 hours
     keepPreviousData: true, 
     getNextPageParam: (lastPage, allPages) => { 
      return lastPage.next ? allPages.length + 1 : undefined;
     }, 
    })
}

export default useGames;