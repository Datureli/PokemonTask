import { useState, useEffect } from "react";
const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(async response => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setPokemons(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    );
  }
};
export default Home;
