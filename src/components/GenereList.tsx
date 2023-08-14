import useGenere from "../Hooks/useGenere"

const GenereList = () => {
  const {genres} = useGenere();
  return (
    <>
    <ul>
        {genres.map(genre => <li key={genre.id}> {genre.name} </li>)}
    </ul>
    </>
  )
}

export default GenereList