import { MoveStats, NameUrlPair, Pokemon } from "./types";

let url: string = "https://pokeapi.co/api/v2";

export const fetchPokemon = async (pokemonName: string) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then<Pokemon>(
    (res) => {
      const expectedResponseCode = 200;
      if (res.status === expectedResponseCode) {
        return res.json();
      }
      throw new Error(
        `Got HTTP status code ${res.status}, when HTTP status code ${expectedResponseCode} was expected`
      );
    }
  );

export const fetchMove = async (moveUrl: string) =>
  fetch(`${moveUrl}`).then<MoveStats>((res) => {
    const expectedResponseCode = 200;
    if (res.status === expectedResponseCode) {
      return res.json();
    }
    throw new Error(
      `Got HTTP status code ${res.status}, when HTTP status code ${expectedResponseCode} was expected`
    );
  });

export function capitalizeFirstLetter(name: string) {
  return name[0].toUpperCase() + name.slice(1);
}
