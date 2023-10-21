import { circleSize } from "~/engine/gameVariables";
import type { Score } from "~/engine/gameVariables";
import React from "react";
import plus from "~/assets/plus_thick.svg";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { getTimeString } from "~/engine/timer";
import { getRandomValue } from "~/engine/functions";

type finaleScoreBoardProps = {
  score: Score;
};

const CROSSHAIR_SIZE = 10;

const orientations: string[] = [];

for (let i = 0; i < 10000; i++) {
  orientations.push(`${getRandomValue(0, 90).toFixed(0)}deg`);
}

const FinalScoreBoard: React.FC<finaleScoreBoardProps> = ({
  score,
}): JSX.Element => {
  const time = getTimeString(score.endTime);
  const missClicks = score.totalClicks - score.score;
  const accuracy = (score.score / score.totalClicks).toFixed(2);

  return (
    <div>
      <div className="pl-[70px] text-left">
        <br />
        Score: {score.score} <br />
        Time: {time} <br />
        Maximum click speed: {score.maxClickSpeed} <br />
        Miss clicks: {missClicks} <br />
        Accuracy: {accuracy}
      </div>
      <div className="flex h-[200px] items-center justify-center">
        <div className="relative">
          <div
            className={`circle `}
            style={{ width: circleSize, height: circleSize }}
          />

          <div
            className={"innerCircle"}
            style={{
              width: circleSize / 10,
              height: circleSize / 10,
              position: "absolute",
              left: (circleSize * 9) / 20,
              top: (circleSize * 9) / 20,
            }}
          />
          {score.clickLocations.map((position, index) => (
            <Image
              key={index}
              className={"absolute origin-center transform"}
              style={{
                rotate: orientations[index],
                top: position.Y - CROSSHAIR_SIZE / 2,
                left: position.X - CROSSHAIR_SIZE / 2,
              }}
              src={plus as StaticImageData}
              alt="plus"
              width={CROSSHAIR_SIZE}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinalScoreBoard;
