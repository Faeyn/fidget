import Board from "./component/board";
import HeadComponent from "./component/head";
import type { Position, WindowSize } from "./elements/elementTypes";
import Circle from "./elements/circle";
import { useEffect, useState } from "react";
import getRandomValue from "./engine/random";
import { boardBorder } from "./component/UIVariables";
import { type Score, circleSize } from "./engine/gameVariables";
import ScoreBoard from "./component/scoreBoard";
import Button from "./component/button";
import FinalScoreBoard from "./component/finalScoreBoard";

const initialScore: Score = {
    score: 0,
    seconds: 0,
    totalClicks: 0,
    clickSpeed: 0,
    maxSpeed: 0,
}

export default function Game() {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        X: 0,
        Y: 0,
    })
    const [score, setScore] = useState<Score>(initialScore)
    const [seconds, setSeconds] = useState(0);
    const [circlePositions, setCirclePositions] = useState<Array<Position>>([])
    const [isPlaying, setIsPlaying] = useState<boolean>(true)

    const resetGameStates = () => {
        setSeconds(0)
        setCirclePositions([getPosition()])
        setScore(initialScore)
        setIsPlaying(true)
    }

    useEffect(() => {
        setWindowSize({
            X: window.innerWidth,
            Y: window.innerHeight,
        })

        const updateWindowSize = () => {
            setWindowSize({
                X: window.innerWidth,
                Y: window.innerHeight,
            });
        };
    
        window.addEventListener('resize', updateWindowSize)

        return () => {
            window.removeEventListener('resize', updateWindowSize)
        }

    }, [])

    useEffect(() => {
        setCirclePositions([getPosition()])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [windowSize])
    
    useEffect(() => {
        const intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
    
        return () => {
        clearInterval(intervalId);
        };
    }, []);

    function getPosition() {return {
        X: getRandomValue(boardBorder, windowSize.X - boardBorder - circleSize),
        Y: getRandomValue(boardBorder, windowSize.Y  - boardBorder - circleSize),
    }}

    const clickSpeed = +(seconds === 0 ? 0 : (score.score / seconds).toFixed(2))
    
    const updateCirclePosition = (index: number): void => {
        const newPositions = [...circlePositions]
        let isOverlapping = true

        while (isOverlapping) {
            const newPosition = getPosition()

            isOverlapping = circlePositions.some((position) => {
                return ((newPosition.X - position.X)**2 + (newPosition.Y - position.Y)**2 < 2*circleSize**2)
            })

            if (!isOverlapping) {
                newPositions[index] = newPosition
            }
        }

        setCirclePositions(newPositions)
    }

    useEffect(() => {
        if (seconds > 0 && seconds % 20 === 0) {
            updateCirclePosition(circlePositions.length)
        } 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [seconds])

    useEffect(() => {
        setScore((prevScore) => (
            {
                ...prevScore,
                ["clickSpeed"]: clickSpeed,
                ["maxSpeed"]:  Math.max(clickSpeed, prevScore.maxSpeed),
            }))
    }, [clickSpeed])

    if (isPlaying) {
        return (
        <>
            <HeadComponent />
            <Board windowSize={windowSize} onClick={() => {setScore((prevScore) => ({...prevScore, ["totalClicks"]: prevScore.totalClicks + 1}))}}>
                <>
                    <ScoreBoard score={score}/>
                    {circlePositions.map((position, index) => 
                    <Circle 
                        key={index} 
                        circlePosition={position} 
                        onClick={() => {
                            setScore((prevScore) => ({...prevScore, ["score"]: prevScore.score +1}))
                            updateCirclePosition(index)
                        }}
                        onAnimationEnd={() => {
                            setScore((prevScore) => ({...prevScore, ["seconds"]: seconds}))
                            setIsPlaying(false)
                        }}/>
                    )}
                </> 
            </Board>
        </>
        )
    } else {
        return (
        <>
            <HeadComponent />
            <Board windowSize={windowSize}>
                <div className="flex h-full flex-col justify-center">
                    <Button text={'Start new game'} onClick={resetGameStates}/>
                    <FinalScoreBoard score={score}/>
                </div>
            </Board>
        </>
    )}
}