import TradePresentation from "./TradePresentation";
import { Level } from "../../../types/types";
import "../../../styling/style.css";

interface Props {
  profession: string;
  levels: Level[];
}

/**
 * Display multiple levels and within each level display the trades for that level
 * @param {Props} props The levels for a villager
 */
function LevelDisplay({ profession, levels }: Props) {
  return (
    <>
      {levels.map((level: Level) => (
        <div key={profession + level.level} className="row">
          <div className="col-sm-3 level-style align-center">{level.level}</div>
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
