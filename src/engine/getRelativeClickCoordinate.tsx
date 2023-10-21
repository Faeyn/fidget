import type { Position } from "../elements/elementTypes";
import { calculateRelativeCoordinates } from "./functions";

export const getRelativeClickCoordinate = (
  circlePositions: Position[],
  mousePosition: Position
) => {
  const relativeDistances = circlePositions.map((position) => {
    const { X, Y } = calculateRelativeCoordinates(position, mousePosition);
    return (X ** 2 + Y ** 2) ** (1 / 2);
  });

  const indexClosestCircle = relativeDistances.indexOf(
    Math.min(...relativeDistances)
  );

  const closestCirclePosition = circlePositions[indexClosestCircle]!;

  const relativePosition = calculateRelativeCoordinates(
    closestCirclePosition,
    mousePosition
  );

  return relativePosition;
};
