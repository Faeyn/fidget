import React, { useState } from "react";
import type { itemProps } from "./elementTypes";

const Triangle: React.FC<itemProps> = ({
  position,
  onClick,
  onAnimationEnd,
}): JSX.Element => {
  const [isAnimating, setIsAnimating] = useState(true);

  const handleAnimationEnd = () => {
    setIsAnimating(false);

    // Reset animation after a brief delay
    setTimeout(() => {
      onAnimationEnd();
      setIsAnimating(true);
    }, 15);
  };
  return (
    <>
      <div
        className={`triangle ${
          isAnimating ? "animate-triangle-animation" : ""
        }`}
        style={{
          position: "fixed",
          left: position.X,
          top: position.Y,
        }}
        onAnimationEnd={handleAnimationEnd}
        onClick={onClick}
      />
    </>
  );
};

Triangle.displayName = "Triangle";

export default Triangle;
