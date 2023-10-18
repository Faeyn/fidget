import { boardBorder } from "./UIVariables";
import type { WindowSize } from "../elements/elementTypes";

type BoardProps = {
  windowSize: WindowSize;
  onClick?: () => void;
  children: JSX.Element;
};

const Board: React.FC<BoardProps> = ({
  windowSize,
  onClick,
  children,
}): JSX.Element => {
  const boardStyle = {
    width: Math.max(windowSize.X - 2 * boardBorder, 100),
    height: Math.max(windowSize.Y - 2 * boardBorder, 100),
    left: boardBorder,
    top: boardBorder,
  };

  return (
    <div
      className={`absolute flex justify-center rounded-[50px] border-[4px] border-solid border-black bg-slate-200`}
      onClick={onClick}
      style={boardStyle}
    >
      {children}
    </div>
  );
};

export default Board;
