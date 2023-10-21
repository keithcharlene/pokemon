import "./app.css";

import React, { useEffect, useState } from "react";

import { Pokemon } from "./types";
import PokemonCard from "./components/PokemonCard";
import { fetchPokemon } from "./utils";

const App = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>();

  useEffect(() => {
    const pokemonNames = ["jigglypuff", "eevee", "squirtle"];

    const fetchAllPokemons = pokemonNames.map((name) => fetchPokemon(name));

    Promise.all(fetchAllPokemons)
      .then((pokemon) => {
        setPokemons(pokemon);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="appRoot">
      {pokemons?.map((pokemon) => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </div>
  );
};

export default App;
