import TradeContent from "./TradeContent";
import { Villager } from "../types/types";

interface Props {
  villager: Villager;
}

function VillagerContent({ villager }: Props) {
  return (
    <>
      {/* VillagerContent */}
      <div className="row">
        {/* Villager col */}
        <div className="col-sm-3">
          {/* Villgaer image row */}
          <div className="row">
            <img
              src={villager.image}
              className="img-fluid"
              style={{ width: "120px" }}
            ></img>
          </div>
          {/* Stone cutter image row */}
          <div className="row">
            <img
              src={villager.workstation.image}
              className="img-fluid"
              style={{ width: "120px" }}
            ></img>
          </div>
        </div>
        {/* Display the list of trades */}
        <TradeContent tradeArray={villager.tradeArray} />
      </div>
    </>
  );
}

export default VillagerContent;
