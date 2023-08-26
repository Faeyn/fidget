import { useEffect, useState } from "react"

type BoardDimensions = {
    width: number,
    height: number,
}

const Board = () => {
    const [boardDimensions, setBoardDimensions] = useState<BoardDimensions>({
        width: typeof window != 'undefined' ? window.innerWidth: 0,
        height: typeof window != 'undefined' ? window.innerHeight: 0,
    })
    
    useEffect(() => {
        const handleResize = () => {
            setBoardDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])


    const width = `w-[${boardDimensions.width-100}px]`
    const height = `h-[${boardDimensions.height-100}px]`
    // const boardClassName = `${width} ${height} rounded-[50px] bg-black`
    console.log(width, height)

    return (
    <>
        <div className={`absolute top-[50px] left-[50px] w-[200px] h-[200px] rounded-[50px] bg-black`} />
    </>
    )    

}

export default Board