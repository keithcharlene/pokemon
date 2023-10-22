import React from "react";

interface StatsProps {
  id: number;
  height: number;
  weight: number;
}

const Stats: React.FunctionComponent<StatsProps> = ({ id, height, weight }) => {
  return (
    <div className="flex flex-row bg-amber-100 text-center p-1 rounded-b-lg text-sm">
      <div className="w-1/5 ml-2">
        <span className="font-semibold">ID:</span> {id}
      </div>
      <div className="w-2/5">
        <span className="font-semibold">Height:</span> {height}dm
      </div>
      <div className="w-2/5">
        <span className="font-semibold">Weight:</span> {weight}hg
      </div>
    </div>
  );
};
export default Stats;
