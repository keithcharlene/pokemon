import { NameUrlPair, Pokemon } from "./types";

let url: string = "https://pokeapi.co/api/v2";

export const fetchPokemon = async (pokemonName: string) =>
  fetch(`${url}/pokemon/${pokemonName}`).then<Pokemon>((res) => {
    const expectedResponseCode = 200;
    if (res.status === expectedResponseCode) {
      return res.json();
    }
    throw new Error(
      `Got HTTP status code ${res.status}, when HTTP status code ${expectedResponseCode} was expected`
    );
  });

export const fetchPokemonInfo = (type: string, nameUrlPair: NameUrlPair) => {
  fetch(`${url}/v2/${type}/`).then<Pokemon>((res) => {
    const expectedResponseCode = 200;
    if (res.status === expectedResponseCode) {
      return res.json();
    }
    throw new Error(
      `Got HTTP status code ${res.status}, when HTTP status code ${expectedResponseCode} was expected`
    );
  });
};
