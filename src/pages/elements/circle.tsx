import { useState } from "react"
import { boardBoarder, circleSize } from "../engine/gameVariables"
import getRandomValue from "../engine/random"
import type { WindowSize } from "./elementTypes"

type CircleProps = {
  windowSize: WindowSize
  onClick: () => void
}


const Circle: React.FC<CircleProps> = ({windowSize, onClick}): JSX.Element => { 

  const left = getRandomValue(boardBoarder, windowSize.X - boardBoarder - circleSize)
  const top = getRandomValue(boardBoarder, windowSize.Y  - boardBoarder - circleSize)

  return (
  <>
    <div 
    className={`circle absolute`} 
    style={{
        width: circleSize,
        height: circleSize,
        position: 'fixed',
        left,
        top,
      }}
    onClick={onClick}
      />
  </>
)
}

export default Circle