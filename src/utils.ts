import { MoveStats, Pokemon } from "./types";

import { useEffect } from "react";

export const fetchResource = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  const expectedResponseCode = 200;
  if (response.status === expectedResponseCode) {
    return response.json();
  }
  throw new Error(
    `Got HTTP status code ${response.status}, when HTTP status code ${expectedResponseCode} was expected`
  );
};

export const fetchPokemon = async (url: string) => fetchResource<Pokemon>(url);

export const fetchMove = async (url: string) => fetchResource<MoveStats>(url);

export const usePromiseAll = <T>(
  promises: Promise<T[]>,
  setFunction: (data: T[]) => void
) => {
  useEffect(() => {
    promises
      .then((data) => {
        setFunction(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
};

export const capitalizeFirstLetter = (name: string) => {
  return name[0].toUpperCase() + name.slice(1);
};
