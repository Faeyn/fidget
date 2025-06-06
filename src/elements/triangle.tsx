import React, { useState } from "react";
import type { itemProps } from "./elementTypes";

const Triangle: React.FC<itemProps> = ({
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
        className={`triangle`}
        style={{
          position: "fixed",
          left: position.X,
          top: position.Y,
        }}
        onAnimationEnd={
          !isClicked
            ? () => {
                ("");
              }
            : onAnimationEnd
        }
      />
    </>
  );
};

Triangle.displayName = "Triangle";

export default Triangle;
