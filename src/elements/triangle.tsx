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
      <div className="h-0 w-0 border-b-[100px] border-l-[50px] border-r-[50px] border-b-black border-l-transparent border-r-transparent" />
    </>
  );
};

Triangle.displayName = "Triangle";

export default Triangle;
