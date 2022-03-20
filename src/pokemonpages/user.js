import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const User = () => {
  let { id } = useParams();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetchData(id);
  }, [id]);
  const fetchData = async (id) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${id}`);
      const data = await response.json();
      console.log(data);
      setPokemon(data);
      setIsLoaded(true);
    } catch (err) {
      console.error(err);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (pokemon) {
    return (
      <div>
        id {id}
        <h1>Pokemon Details</h1>
        <div>{pokemon.type}</div>
        <div>{pokemon.name}</div>
      </div>
    );
  }
};
export default User;
