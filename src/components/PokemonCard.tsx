import Image from "./Image";
import Moves from "./Moves";
import { Pokemon } from "../types";
import React from "react";
import Stats from "./Stats";
import { capitalizeFirstLetter } from "../utils";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FunctionComponent<PokemonCardProps> = ({
  pokemon,
}) => {
  if (pokemon) {
    return (
      <div className="pokemonCard bg-red-400 p-5 m-2 ">
        <p className="text-2xl pb-2 font-semibold">
          {capitalizeFirstLetter(pokemon.name)}
        </p>

        <Image
          url={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />

        <Stats
          id={pokemon.id}
          height={pokemon.height}
          weight={pokemon.weight}
        />

        <Moves moves={pokemon.moves} />
      </div>
    );
  }
  return null;
};
export default PokemonCard;
