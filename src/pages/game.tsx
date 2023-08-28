import Board from "./elements/board";
import HeadComponent from "./component/head";
import type { WindowSize } from "./elements/elementTypes";
import Circle from "./elements/circle";
import { useEffect, useState } from "react";

export default function Game() {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        X: 0,
        Y: 0,
    })

    const [score, setScore] = useState<number>(0)

    console.log(score)
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


    return (
        <>
            <HeadComponent/>
            <Board windowSize={windowSize}/>
            <Circle windowSize={windowSize} onClick={() => {setScore(score + 1)}}/>
        </>
    );

}
