import { Move, MoveDescription, MoveStats } from "../types";
import React, { useEffect, useState } from "react";
import { capitalizeFirstLetter, fetchMove, usePromiseAll } from "../utils";

interface MoveProps {
  moves: Move[];
}

const versionGroup = "diamond-pearl";

function findDescription(move: MoveStats) {
  return move.flavor_text_entries.find(
    (desc) => desc.version_group.name === versionGroup
  )?.flavor_text;
}

const Moves: React.FunctionComponent<MoveProps> = ({ moves }) => {
  const firstTwoMoves = moves.slice(0, 2);
  const [moveInfo, setMoveInfo] = useState<MoveStats[]>();

  const fetchFirstTwoMoves = firstTwoMoves.map((move) =>
    fetchMove(move.move.url)
  );

  usePromiseAll(Promise.all(fetchFirstTwoMoves), setMoveInfo);

  if (!moveInfo?.length) return <div>No moves found</div>;

  return (
    <div className="mt-2 p-1 flex flex-col">
      <div className="text-lg font-bold text-center">Moves</div>

      {moveInfo.map((move, index) => (
        <div className="m-2" key={index}>
          <div className="font-semibold italic">
            {capitalizeFirstLetter(move.name)}
          </div>
          <div>{findDescription(move)}</div>
        </div>
      ))}
    </div>
  );
};
export default Moves;
