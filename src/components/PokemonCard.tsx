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
  if (!pokemon) return <div>Pokemon not found</div>;

  const { name, id, height, weight, moves, sprites } = pokemon;

  return (
    <div className="flex flex-col w-96 drop-shadow-lg border-8 border-amber-200 bg-emerald-300 p-5 m-5 rounded-lg">
      <div className="text-2xl pb-2 italic text-center">
        {capitalizeFirstLetter(name)}
      </div>
      <Image url={sprites.other.dream_world.front_default} alt={name} />
      <Stats id={id} height={height} weight={weight} />
      <Moves moves={moves} />
    </div>
  );
};
export default PokemonCard;
