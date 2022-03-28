import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [error] = useState(null);
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

    function getPokemon(results) {
      results.map(async (pokemon) => {
        const response2 = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await response2.json();

        setPokemons((pokemonList) => [...pokemonList, data]);
        await pokemons.sort((a, b) => a.name - b.name);
      });
    }

    getPokemon(data.results);
    setIsLoaded(false);
  };
  const sortPokemonbyName = () => {
    setPokemons(pokemons.slice().sort((a, b) => (a.name > b.name ? 1 : -1)));
  };
  function sortPokemonbyType() {
    setPokemons(pokemons.slice().sort((a, b) => (a.types[0].type.name > b.types[0].type.name ? 1 : -1)));
  }

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
        <div className="App">
          <ul>
            {pokemons &&
              pokemons.map((pokemon, index) => (
                <li key={index}>
                  <Link to={`pokemon/${index + 1}`}>
                    <h2>{pokemon.name}</h2>

                    <p>{pokemon.types[0].type.name}</p>
                    <img
                      src={pokemon.sprites.other.dream_world.front_default}
                      alt={"pokemon img"}
                    ></img>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        {<button onClick={() => fetchData()}>Load more</button>}
        {<button onClick={() => sortPokemonbyName()}>Sort by name</button>}
        {
          <button type="submit" onClick={() => sortPokemonbyType()}>
            Sort by type
          </button>
        }
      </div>
    );
  }
};
export default Home;
