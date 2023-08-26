import Head from "next/head";
import getRandomValue from "./engine/random";
import Circle from "./elements/Circle";
import { useEffect, useState } from "react";
import Board from "./board";

export default function Home() {
  const [left, setLeft] = useState(0)
  const [top, setTop] = useState(0)

  useEffect(() => {
    const windowY = window.innerHeight - 100
    const windowX = window.innerWidth - 100

    setLeft(getRandomValue(100, windowX))
    setTop(getRandomValue(100, windowY))
  }, []);

  console.log(top, left)

  return (
    <>
      <Head>
        <title>HTA Fidget</title>
        <meta name="description" content="Fidgeting" />
        <link rel="icon" href="/h-log.png" />
      </Head>
      <Board />
      <Circle left={left} top={top}/>
    </>
  );
}
