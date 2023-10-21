import { Pokemon } from "../types";
import React from "react";
import Stats from "./Stats";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FunctionComponent<PokemonCardProps> = ({
  pokemon,
}) => {
  if (pokemon) {
    return (
      <div className="pokemonCard bg-red-400 p-5 m-2 ">
        {/* <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`${pokemon.name} illustration`}
        /> */}
        <Stats
          id={pokemon.id}
          height={pokemon.height}
          weight={pokemon.weight}
        />
      </div>
    );
  }
  return null;
};
export default PokemonCard;
