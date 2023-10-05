import type { Score } from "../engine/gameVariables"

type finaleScoreBoardProps = {
    score: Score,
}


function addLeadingZero(number: number) {
    return number < 10 ? `0${number}` : `${number}`;
  }


const FinalScoreBoard: React.FC<finaleScoreBoardProps> = ({score}): JSX.Element => {
    const minutes = addLeadingZero(Math.floor(score.seconds/60))
    const seconds = addLeadingZero(score.seconds % 60)
    const time = `${minutes}:${seconds}`
    const missClicks = score.totalClicks - score.score
    const accuracy = (score.score / (score.totalClicks)).toFixed(2)

    return (
            <div className="text-left pl-[70px]">
                <br />
                Score: {score.score} <br />
                Time: {time} <br />
                Average click rate: {score.maxSpeed} <br/>
                Miss clicks: {missClicks} <br />
                Accuracy: {accuracy}
            </ div>                 

    )    

}

export default FinalScoreBoard