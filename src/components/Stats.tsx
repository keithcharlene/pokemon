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
    <div className="bg-orange-100 flex p-1 rounded-b-lg text-sm">
      <div className="w-1/3">
        <span className="font-semibold">ID:</span> {id}
      </div>
      <div className="w-1/3">
        <span className="font-semibold">Height:</span> {height}
      </div>
      <div className="w-1/3">
        <span className="font-semibold">Weight:</span> {weight}
      </div>
    </div>
  );
};
export default PokemonCard;
