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
              src={getImageSrc(villager.profession, false)}
              className="villager-width"
            ></img>
          </div>
          {/* Stone cutter image row */}
          <div className="row">
            <img
              src={getImageSrc(villager.workstation, false)}
              className="villager-width"
            ></img>
          </div>
          <div className="row">
            <img
              src={getImageSrc(villager.workstation, true)}
              className="villager-width"
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

function getImageSrc(workstation: string, isRecipe: boolean): string {
  let src: string;
  src = workstation.toLowerCase();
  src = src.replace(" ", "-");
  src = "./images/" + src;
  if (isRecipe) src = src + "-recipe.webp";
  else src = src + ".webp";
  return src;
}

// function getWorkstationSrc(workstation: string): string {
//   let src: string;
//   src = workstation.toLowerCase();
//   src = src.replace(" ", "-");
//   src = "../../../assets/images" + src + ".webp";
//   return src;
// }

// function getVillagerSrc(profession: string): string {
//   let src: string;
//   src = profession.toLowerCase();
//   src = src.replace(" ", "-");
//   src = "../../../assets/images" + src + ".webp";
//   return src;
// }

export default VillagerPresentation;
