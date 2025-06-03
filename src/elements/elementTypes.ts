export type WindowSize = {
  X: number;
  Y: number;
};

export type Position = {
  X: number;
  Y: number;
};

export type itemProps = {
  position: Position;
  onClick: () => void;
  onAnimationEnd: () => void;
};
