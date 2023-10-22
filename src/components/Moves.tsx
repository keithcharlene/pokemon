import { Move, MoveDescription, MoveStats } from "../types";
import React, { useEffect, useState } from "react";
import { capitalizeFirstLetter, fetchMove, fetchPokemon } from "../utils";

interface MoveProps {
  moves: Move[];
}

function findDescription(move: MoveStats) {
  return move.flavor_text_entries.find(
    (desc) => desc.version_group.name === "diamond-pearl"
  )?.flavor_text;
}

const Moves: React.FunctionComponent<MoveProps> = ({ moves }) => {
  const firstTwoMoves = moves.slice(0, 2);
  const [moveInfo, setMoveInfo] = useState<MoveStats[]>();

  useEffect(() => {
    const fetchFirstTwoMoves = firstTwoMoves.map((move) =>
      fetchMove(move.move.url)
    );

    Promise.all(fetchFirstTwoMoves)
      .then((move) => {
        setMoveInfo(move);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="mt-2 bg-lime-100 p-1 rounded-b-lg">
      <p>Moves</p>
      {moveInfo?.map((move) => (
        <div className="bg-lime-100 flex flex-col p-1 rounded-b-lg">
          <div>{capitalizeFirstLetter(move.name)}</div>
          <div>{findDescription(move)}</div>
        </div>
      ))}
    </div>
  );
};
export default Moves;
