import { boardBorder } from "./UIVariables"
import type { WindowSize } from "../elements/elementTypes"

type BoardProps = {
    windowSize: WindowSize,
    onClick?: () => void,
    children: JSX.Element
}

const Board: React.FC<BoardProps>= ({windowSize, onClick, children}): JSX.Element => {
    const boardStyle = {
        width: windowSize.X - 2*boardBorder,
        height: windowSize.Y - 2*boardBorder,
        left: boardBorder,
        top: boardBorder,
    }
    
    return (
        <div 
        className={`absolute flex justify-center border-[4px] rounded-[50px] border-solid border-black`}
        onClick={onClick}
        style={boardStyle}>
            {children}
        </div>
    )    

}

export default Board