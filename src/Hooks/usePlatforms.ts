import platform from "../Data/platform";

// interface Platform {
//     id: number;
//     name: string;
//     slug: string;
// }

 const usePlatform = () => ({data: platform, isLoading: false, error: null})

 export default usePlatform;