import type { Position } from "~/elements/elementTypes"

export const circleSize = 100

export const timeInterval = 100

export const secondOverTime = (timeInterval / 1000)

export type Score = {
    score: number,
    endTime: number,
    totalClicks: number,
    clickTime: number[],
    clickLocations: Position[],
    maxClickSpeed: number,
}