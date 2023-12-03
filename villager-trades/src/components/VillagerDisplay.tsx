import TradeDisplay from "./TradeDisplay";
import { Villager, Level } from "../types/types";
import LevelDisplay from "./LevelDisplay";

interface Props {
  villager: Villager;
}

function VillagerDisplay({ villager }: Props) {
  console.log("displaying villager");
  console.log(villager);
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
          <div className="row">
            <img
              src={getRecipeSrc(villager.workstation)}
              className="img-fluid"
              style={{ width: "120px" }}
            ></img>
          </div>
        </div>
        {/*  */}
        {/* Display the list of trades */}
        <div className="col-sm-9">
          <LevelDisplay
            profession={villager.profession}
            levels={villager.levels}
          />
        </div>
      </div>
    </>
  );
}

function getRecipeSrc(workstation: string): string {
  let src: string;
  src = workstation.toLowerCase();
  src = src.replace(" ", "-");
  src = "./recipes/" + src + "-recipe.webp";
  return src;
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
