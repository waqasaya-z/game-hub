import { useQuery } from "@tanstack/react-query";
import genres from "../Data/genres";
import APIClient from "../services/api-client";

export interface Genre {
    id: number;
    name: string;
    image_background: string;

}

// const useGenere = () => ({data: genres, isLoading: false, error: null} )

const apiClient = new APIClient<Genre>('/genres');

 const useGenere = () => {
    return useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 6 * 1000, //24 hours
    initialData: {count: genres.length, results: genres}
    })
 }


export default useGenere
 