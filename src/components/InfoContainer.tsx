import { Pokemon } from "../types";
import React from "react";

interface Props {
  pokemon?: Pokemon;
}

const InfoContainer: React.FunctionComponent<Props> = ({ pokemon }) => {
  if (pokemon) {
    return (
      <div className="infoContainer">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`${pokemon.name} illustration`}
        />
        <h1>Nå er det kun litt koding som gjenstår, lykke til!</h1>
        <h1 className="text-6xl font-bold underline">Test av Tailwind</h1>
      </div>
    );
  }
  return null;
};
export default InfoContainer;
