import TradeDisplay from "./TradeDisplay";
import { Villager } from "../types/types";

interface Props {
  villager: Villager;
}

function VillagerDisplay({ villager }: Props) {
  return (
    <>
      {/* VillagerContent */}
      <div className="row">
        {/* Villager col */}
        <div className="col-sm-3">
          {/* Villgaer image row */}
          <div className="row">
            <img
              src={getVillagerSrc(villager.profession)}
              className="img-fluid"
              style={{ width: "120px" }}
            ></img>
          </div>
          {/* Stone cutter image row */}
          <div className="row">
            <img
              src={getWorkstationSrc(villager.workstation)}
              className="img-fluid"
              style={{ width: "120px" }}
            ></img>
          </div>
        </div>
        {/* Display the list of trades */}
        <TradeDisplay tradeArray={villager.tradeArray} />
      </div>
    </>
  );
}

function getWorkstationSrc(workstation: string): string {
  let src: string;
  src = workstation.toLowerCase();
  src = src.replace(" ", "-");
  src = "./workstations/" + src + ".webp";
  return src;
}

function getVillagerSrc(profession: string): string {
  let src: string;
  src = profession.toLowerCase();
  src = src.replace(" ", "-");
  src = "./villagers/" + src + ".webp";
  return src;
}

export default VillagerDisplay;
