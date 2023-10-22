import { Move, MoveStats } from "../types";
import React, { useState } from "react";
import { capitalizeFirstLetter, fetchResource, usePromiseAll } from "../utils";

interface MoveProps {
  moves: Move[];
}

const versionGroup = "diamond-pearl";

export const findDescription = (element: MoveStats) => {
  if (element) {
    return element.flavor_text_entries.find(
      (desc) => desc.version_group.name === versionGroup
    )?.flavor_text;
  } else {
    return "Description not found";
  }
};

const Moves: React.FunctionComponent<MoveProps> = ({ moves }) => {
  const firstTwoMoves = moves.slice(0, 2);
  const [moveInfo, setMoveInfo] = useState<MoveStats[]>();

  const fetchFirstTwoMoves = Promise.all(
    firstTwoMoves.map((move) => fetchResource<MoveStats>(move.move.url))
  );
  usePromiseAll(fetchFirstTwoMoves, setMoveInfo);

  if (!moveInfo?.length) {
    return <div>No moves found</div>;
  } else {
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
  }
};
export default Moves;
