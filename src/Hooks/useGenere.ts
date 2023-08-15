import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
    image_background: string;

}

const useGenere = () => useData<Genre>('/genres')

export default useGenere
