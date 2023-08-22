import { GameQuery } from "../App";
import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

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
            genres: gameQuery.genre?.id, 
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam
                   },
     }),
     staleTime: 1 * 60 * 1000,
     keepPreviousData: true, 
     getNextPageParam: (lastPage, allPages) => { 
      return lastPage.next ? allPages.length + 1 : undefined;
     }, 
    })
}

export default useGames;