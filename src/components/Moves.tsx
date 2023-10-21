import { Move } from "../types";
import React from "react";

interface MoveProps {
  moves: Move[];
}

const Moves: React.FunctionComponent<MoveProps> = ({ moves }) => {
  return (
    <div className="mt-2 bg-lime-100 flex flex-col p-1 rounded-b-lg">
      <p>Moves</p>
      {moves.map((move) => (
        <div className="bg-lime-100 flex p-1 rounded-b-lg">
          <p>{move.move.name}</p> <p>{move.move.url}</p>
        </div>
      ))}
    </div>
  );
};
export default Moves;
