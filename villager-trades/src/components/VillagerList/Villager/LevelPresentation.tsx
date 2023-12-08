import TradePresentation from "./TradePresentation";
import { Level } from "../../../types/types";
import "../../../styling/Level.css";

interface Props {
  profession: string;
  levels: Level[];
}

function LevelDisplay({ profession, levels }: Props) {
  return (
    <>
      {levels.map((level: Level) => (
        <div key={profession + level.level} className="row">
          <div className="col-sm-3 level-style">{level.level}</div>
          <div className="col-sm-9">
            <TradePresentation
              profession={profession}
              tradeArray={level.trades}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default LevelDisplay;
