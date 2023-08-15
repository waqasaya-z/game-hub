import useGenere from "../Hooks/useGenere"

const GenereList = () => {
  const { data } = useGenere();
  return (
    <>
    <ul>
        {data.map(genre => <li key={genre.id}> {genre.name} </li>)}
    </ul>
    </>
  )
}

export default GenereList