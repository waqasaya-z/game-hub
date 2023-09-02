import platform from "../Data/platform";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from 'ms';
import { Platform } from "../entities/Platform";

//  const usePlatform = () => ({data: platform, isLoading: false, error: null})
const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: apiClient.getAll,
         staleTime: ms('24h'), //24 hours
         initialData: platform
    })
 }
  
 export default usePlatforms;