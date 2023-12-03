import TradeDisplay from "./TradeDisplay";
import { Level, Trade } from "../types/types";
import "../styling/Level.css";

interface Props {
  profession: string;
  levels: Level[];
}

function LevelDisplay({ profession, levels }: Props) {
  console.log("displaying levels");
  console.log(levels);
  return (
    <>
      {levels.map((level: Level) => (
        <div key={profession + level} className="row">
          <div className="col-sm-3 level-style">{level.level}</div>
          <div className="col-sm-9">
            <TradeDisplay profession={profession} tradeArray={level.trades} />
          </div>
        </div>
      ))}
    </>
  );
}

export default LevelDisplay;
