import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [nature, useNature] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/`
        );
        const data = await response.json();

        setPokemons(data.results);
        console.log(data)
      } catch (e) {
        setError(e.message || "Something went wrong");
      }

      setIsLoaded(false);
    };
    fetchData();
  }, []);
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
        <ul>
          {pokemons && pokemons.map((pokemon, index) => (
            <li key={index}>
              <Link to={`pokemon/${index + 1}`}>{pokemon.name}{pokemon.type}</Link>
            </li>
         
          ))}
        </ul>
    );
  }
};
export default Home;
