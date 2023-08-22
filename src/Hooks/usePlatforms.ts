import platform from "../Data/platform";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

//  const usePlatform = () => ({data: platform, isLoading: false, error: null})
const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: apiClient.getAll,
         staleTime: 24 * 60 * 6 * 1000, //24 hours
         initialData: platform
    })
 }
  
 export default usePlatforms;