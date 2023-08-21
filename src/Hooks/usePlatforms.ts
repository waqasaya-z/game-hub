import platform from "../Data/platform";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

//  const usePlatform = () => ({data: platform, isLoading: false, error: null})
 const usePlatform = () => {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data),
         staleTime: 24 * 60 * 6 * 1000, //24 hours
         initialData: {count: platform.length, results: platform}
    })
 }

 export default usePlatform;