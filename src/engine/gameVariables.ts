import type { Position } from "~/elements/elementTypes";

export const circleSize = 100;
export const intervalNewCircle = 20;

export const triangleSize = 50;
export const intervalNewTriangle = 2;

export type Score = {
  score: number;
  endTime: number;
  totalClicks: number;
  clickTime: number[];
  clickLocations: Position[];
  maxClickSpeed: number;
};
