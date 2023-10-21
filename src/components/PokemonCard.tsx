import { Pokemon } from "../types";
import React from "react";

interface Props {
  pokemon?: Pokemon;
}

const PokemonCard: React.FunctionComponent<Props> = ({ pokemon }) => {
  if (pokemon) {
    return (
      <div className="pokemonCard bg-red-400 p-5">
        {/* <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`${pokemon.name} illustration`}
        /> */}
        <p>Abilities: {pokemon.abilities.length}</p>
        <p>Experience: {pokemon.base_experience}</p>

        <p>
          Forms:{" "}
          {pokemon.forms.map((form) => (
            <p>
              {form.name} {form.url}
            </p>
          ))}
        </p>

        <p>Height: {pokemon.height}</p>
        <p>
          Items:{pokemon.held_items.length}
          {/* {pokemon.held_items.map((item) => (
            <p>
              {item.name} {item.url}
            </p>
          ))} */}
        </p>

        <h1>Name: {pokemon.name}</h1>

        <p>ID: {pokemon.id}</p>
        <p>
          Moves:
          {pokemon.moves.map((move) => (
            <p>
              {move.move.name} {move.move.url}
            </p>
          ))}
        </p>
        <p>
          Species: {pokemon.species.name} {pokemon.species.url}
        </p>
        <p>Sprites: </p>
        <p>
          Types: {pokemon.types.length}
          {/* {pokemon.types.map((type) => (
            <p>
              {type.name} {type.url}
            </p>
          ))} */}
        </p>
        <p>Weight: {pokemon.weight}</p>
      </div>
    );
  }
  return null;
};
export default PokemonCard;
