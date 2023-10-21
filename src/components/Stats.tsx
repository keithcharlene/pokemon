import React from "react";

interface StatsProps {
  id: number;
  height: number;
  weight: number;
}

const PokemonCard: React.FunctionComponent<StatsProps> = ({
  id,
  height,
  weight,
}) => {
  return (
    <div className="bg-orange-100 flex p-1 rounded-b-lg">
      <div className="w-1/3">ID: {id}</div>
      <div className="w-1/3">Height: {height}</div>
      <div className="w-1/3">Weight: {weight}</div>
    </div>
  );
};
export default PokemonCard;
