import { secondOverTime } from "./gameVariables";

export const getMaxClickSpeed = (clickTime: number[]) => {
  const clickSpeeds: number[] = [0];
  for (let i = clickTime.length - 1; i >= 9; i--) {
    clickSpeeds.push(
      +(9 / (clickTime[i]! - clickTime[i - 9]!) / secondOverTime).toFixed(2)
    );
  }
  return Math.max(...clickSpeeds);
};
