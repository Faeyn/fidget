import type { Score } from "../engine/gameVariables";

type ScoreBoardProps = {
  score: Score;
};
const ScoreBoard: React.FC<ScoreBoardProps> = ({ score }): JSX.Element => {
  return (
    <div className={"flex w-2/5 justify-between text-center"}>
      <div className={"w-1/3"}> Score: {score.score} </div>
      <div className={"w-1/3"}> Speed: {score.maxClickSpeed} </div>
    </div>
  );
};

export default ScoreBoard;
