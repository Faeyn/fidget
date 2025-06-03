import { circleSize } from "../engine/gameVariables";
import type { itemProps } from "./elementTypes";
import React, { useState } from "react";

const Circle: React.FC<itemProps> = ({
  position,
  onClick,
  onAnimationEnd,
}): JSX.Element => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setIsAnimating(false);

    // Reset animation after a brief delay
    setTimeout(() => {
      setIsAnimating(true);
      setIsClicked(false);
      onClick();
    }, 15);
  };

  return (
    <>
      <div
        className={`circle ${isAnimating ? "animate-circle-animation" : ""} ${
          isClicked ? "animation: clickedAnimation 0.015s linear forward" : ""
        }`}
        style={{
          width: circleSize,
          height: circleSize,
          position: "fixed",
          left: position.X,
          top: position.Y,
        }}
        onAnimationEnd={
          !isClicked
            ? onAnimationEnd
            : () => {
                ("");
              }
        }
        onClick={handleClick}
      />
      <div
        className={"innerCircle"}
        style={{
          width: circleSize / 10,
          height: circleSize / 10,
          position: "fixed",
          left: position.X + (circleSize * 9) / 20,
          top: position.Y + (circleSize * 9) / 20,
        }}
        onClick={handleClick}
      />
    </>
  );
};

Circle.displayName = "Circle";

export default Circle;
