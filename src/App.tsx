import "./app.css";

import React, { useState } from "react";
import { fetchResource, usePromiseAll } from "./utils";

import { Pokemon } from "./types";
import PokemonCard from "./components/PokemonCard";

const App = () => {
  const pokemonApi = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemons, setPokemons] = useState<Pokemon[]>();

  const pokemonNames = [
    "jigglypuff",
    "eevee",
    "squirtle",
    "pikachu",
    "chimchar",
    "bulbasaur",
  ];

  const fetchAllPokemons = Promise.all(
    pokemonNames.map((name) => fetchResource<Pokemon>(pokemonApi + name))
  );
  usePromiseAll(fetchAllPokemons, setPokemons);

  return (
    <div className="flex flex-col pt-10 font-mono">
      <div className="flex justify-center text-4xl font-bold">Pokémons</div>
      <div className="flex flex-wrap justify-center my-5">
        {pokemons?.map((pokemon, index) => (
          <PokemonCard pokemon={pokemon} key={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
