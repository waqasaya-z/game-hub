import { useQuery } from "@tanstack/react-query";
import genres from "../Data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Genre {
    id: number;
    name: string;
    image_background: string;

}

// const useGenere = () => ({data: genres, isLoading: false, error: null} )

 const useGenere = () => {
    return useQuery({
    queryKey: ['genres'],
    queryFn: () => apiClient.get<FetchResponse<Genre>>('genres').then(res => res.data),
    staleTime: 24 * 60 * 6 * 1000, //24 hours
    initialData: {count: genres.length, results: genres}
    })
 }


export default useGenere
 