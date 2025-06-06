import Board from "../component/board";
import HeadComponent from "../component/head";
import type { Position, WindowSize } from "../elements/elementTypes";
import Circle from "../elements/circle";
import Triangle from "../elements/triangle";
import { useEffect, useState } from "react";
import {
  type Score,
  intervalNewCircle,
  intervalNewTriangle,
} from "../engine/gameVariables";
import ScoreBoard from "../component/scoreBoard";
import Button from "../component/button";
import FinalScoreBoard from "../component/finalScoreBoard";
import { getPosition } from "../engine/getPosition";
import { getRelativeClickCoordinate } from "../engine/getRelativeClickCoordinate";
import { getMaxClickSpeed } from "../engine/getMaxClickSpeed";
import { secondOverTime, timeInterval } from "~/engine/timer";

const initialScore: Score = {
  score: 0,
  endTime: 0,
  totalClicks: 0,
  clickTime: [],
  clickLocations: [],
  maxClickSpeed: 0,
};

export default function Game() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    X: 0,
    Y: 0,
  });
  const [score, setScore] = useState<Score>(initialScore);
  const [time, setTime] = useState(0);
  const [circlePositions, setCirclePositions] = useState<Array<Position>>([]);
  const [trianglePositions, setTrianglePositions] = useState<Array<Position>>(
    []
  );
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [mousePosition, setMousePosition] = useState<Position>({ X: 0, Y: 0 });

  const resetGameStates = () => {
    setTime(0);
    setCirclePositions([getPosition(windowSize, circlePositions)]);
    setTrianglePositions([]);
    setScore(initialScore);
    setIsPlaying(true);
  };

  useEffect(() => {
    setWindowSize({
      X: window.innerWidth,
      Y: window.innerHeight,
    });

    const updateWindowSize = () => {
      setWindowSize({
        X: window.innerWidth,
        Y: window.innerHeight,
      });
    };

    const udpateMousePosition = (event: {
      clientX: number;
      clientY: number;
    }) => {
      setMousePosition({ X: event.clientX, Y: event.clientY });
    };

    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, timeInterval);

    window.addEventListener("resize", updateWindowSize);
    window.addEventListener("mousemove", udpateMousePosition);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", updateWindowSize);
      window.removeEventListener("mousemove", udpateMousePosition);
    };
  }, []);

  useEffect(() => {
    setCirclePositions([getPosition(windowSize, circlePositions)]);
    setTrianglePositions([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize]);

  useEffect(() => {
    if (time > 0 && (time * secondOverTime) % intervalNewCircle === 0) {
      setCirclePositions([
        ...circlePositions,
        getPosition(windowSize, circlePositions),
      ]);
    }

    if (time > 0 && (time * secondOverTime) % intervalNewTriangle === 0) {
      setTrianglePositions([getPosition(windowSize, trianglePositions)]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  if (isPlaying) {
    return (
      <>
        <HeadComponent />
        <Board
          windowSize={windowSize}
          onClick={() => {
            setScore((prevScore) => ({
              ...prevScore,
              ["totalClicks"]: prevScore.totalClicks + 1,
              ["clickLocations"]: [
                ...prevScore.clickLocations,
                getRelativeClickCoordinate(circlePositions, mousePosition),
              ],
            }));
          }}
        >
          <>
            <ScoreBoard score={score} />

            {/* Manage circles */}
            {circlePositions.map((position, index) => (
              <Circle
                key={index}
                position={position}
                onClick={() => {
                  const newClickTime = score.clickTime.concat(time);
                  const maxClickspeed = getMaxClickSpeed(newClickTime);

                  setScore((prevScore) => ({
                    ...prevScore,
                    ["clickTime"]: newClickTime,
                    ["maxClickSpeed"]: maxClickspeed,
                    ["score"]: prevScore.score + 1,
                  }));

                  const newPositions = circlePositions;
                  newPositions[index] = getPosition(
                    windowSize,
                    circlePositions
                  );
                  setCirclePositions(newPositions);
                }}
                onAnimationEnd={() => {
                  setScore({
                    ...score,
                    ["endTime"]: time,
                  });
                  setIsPlaying(false);
                }}
              />
            ))}

            {/* Manage triangles */}
            {trianglePositions.map((position, index) => (
              <Triangle
                key={index}
                position={position}
                onClick={() => {
                  setScore({
                    ...score,
                    ["endTime"]: time,
                  });
                  setIsPlaying(false);
                }}
                onAnimationEnd={() => {}}
              />
            ))}
          </>
        </Board>
      </>
    );
  } else {
    return (
      <>
        <HeadComponent />
        <Board windowSize={windowSize}>
          <div className="flex h-full flex-col justify-center">
            <Button text={"Start new game"} onClick={resetGameStates} />
            <FinalScoreBoard score={score} />
          </div>
        </Board>
      </>
    );
  }
}
