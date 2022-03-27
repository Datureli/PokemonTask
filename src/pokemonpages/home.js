import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [loadMore, setLoadMore] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=20/`
  );
  const [pokemons, setPokemons] = useState([]);

  const fetchData = async () => {
    const response = await fetch(loadMore);
    const data = await response.json();

    setLoadMore(data.next);
    console.log(data);

    function createPokemon(results) {
      results.forEach(async (pokemon) => {
        const response2 = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await response2.json();

        setPokemons((currentList) => [...currentList, data]);
      });
    }

    createPokemon(data.results);
    setIsLoaded(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
      <div className="pokemonContainer">
        <ul>
          {pokemons &&
            pokemons.map((pokemon, index) => (
              <li key={index}>
                <Link to={`pokemon/${index + 1}`}>
                  <h2>{pokemon.name}</h2>
                </Link>
                {pokemon.types[0].type.name}
                <img
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt={"pokemon img"}
                ></img>
              </li>
            ))}
        </ul>
      
      </div>
        {<p>Loading pokemons</p>}
        {<button onClick={() => fetchData()}>Load more</button>}
        </div>
    );
  }
};
export default Home;
