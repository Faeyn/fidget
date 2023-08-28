import { WindowSize } from "../elements/elementTypes"

type ScoreBoardArgs = {
    windowSize: WindowSize
}
const ScoreBoard = ({windowSize}: ScoreBoardArgs): JSX.Element => {

    const boardStyle = {
        width: windowSize.X - 2*boardBoarder,
        height: windowSize.Y - 2*boardBoarder,
        left: boardBoarder,
        top: boardBoarder,
    }
    
    return (
    <>
        <div 
        className={`absolute border-[4px] rounded-[50px] border-solid border-black`} 
        style={boardStyle}/>
    </>
    )    

}

export default Board