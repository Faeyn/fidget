import type { Score } from "../engine/gameVariables"

type ScoreBoardProps = {
    score: Score
}
const ScoreBoard: React.FC<ScoreBoardProps> = ({score}): JSX.Element => {

    return (
        <div className={'flex justify-between w-4/5 text-center'}>
            <div className={"w-1/3"}> Score: {score.score} </ div>
            <div className={"w-1/3"}> Click Per Second: {score.clickSpeed} </ div>
            <div className={"w-1/3"}> MaxSpeed: {score.maxSpeed} </ div>                 
        </div>
    )    

}

export default ScoreBoard