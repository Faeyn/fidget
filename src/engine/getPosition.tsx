import type { Position } from "../elements/elementTypes";
import { boardBorder } from "../component/UIVariables";
import { circleSize } from "./gameVariables";
import { getRandomValue } from "./functions";

export function getPosition(
  windowSize: Position,
  itemPositions: Position[]
): Position {
  let newPosition: Position = { X: 0, Y: 0 };
  let isOverlapping = true;

  while (isOverlapping) {
    newPosition = {
      X: getRandomValue(boardBorder, windowSize.X - boardBorder - circleSize),
      Y: getRandomValue(boardBorder, windowSize.Y - boardBorder - circleSize),
    };

    isOverlapping = itemPositions.some((position) => {
      return (
        (newPosition.X - position.X) ** 2 + (newPosition.Y - position.Y) ** 2 <
        2 * circleSize ** 2
      );
    });
  }

  return newPosition;
}
