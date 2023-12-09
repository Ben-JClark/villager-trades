import { Villager } from "../../../types/types";
import LevelPresentation from "./LevelPresentation";

interface Props {
  villager: Villager;
}

function VillagerPresentation({ villager }: Props) {
  return (
    <>
      {/* VillagerContent */}
      <div className="row mb-3">
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
          <LevelPresentation
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

export default VillagerPresentation;
