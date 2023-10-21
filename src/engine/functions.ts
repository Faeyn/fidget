import type { Position } from "~/elements/elementTypes";


export function getRandomValue(value1: number, value2: number) {
    const randomizer = Math.random()
    const valueRange = value1 - value2
    return value1 - Math.round( valueRange * randomizer)
}

 getRandomValue

export function calculateRelativeCoordinates(
    originPosition: Position,
    relativePosition: Position
  ): Position {
    return {
      X: relativePosition.X - originPosition.X,
      Y: relativePosition.Y - originPosition.Y,
    };
  }
  