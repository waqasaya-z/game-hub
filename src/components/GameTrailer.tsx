import { Spinner } from "@chakra-ui/react";
import useTrailers from "../Hooks/useTrailers"

interface Props {
    gameId: number;
}

const GameTrailer = ({gameId} : Props) => {
  const { data, error , isLoading } = useTrailers(gameId);
   console.log(data)
   if (isLoading) return <Spinner />
   if(error) throw error;
   const first = data?.results[0];
   return first ? <video src={first.data[480]}
   poster={first.preview}
   controls />: null;
  
}

export default GameTrailer