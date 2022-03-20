import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  // const [error, setError] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
     const fetchPokemonName = async () => {
     Promise.all([
      await fetch("https://pokeapi.co/api/v2/pokemon/"),
      await fetch("https://pokeapi.co/api/v2/type/"),
     ])
     .then(response => {
      response.forEach(values => values)
      }).catch(error => {})  
    };
    fetchPokemonName();
  }, []);
  const usePokemons = pokemons.map((pokemon) => {
    return (
      <li key={`${pokemon.id}-${pokemon.name}`}>
        <Link to={`pokemon/${pokemon.name}`}>{pokemon.name}{pokemon.type}</Link>
      </li>
    );
  });
  return <div>{pokemons && usePokemons}</div>;
};

