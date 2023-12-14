import { Villager } from "../../../types/types";
import LevelPresentation from "./LevelPresentation";

interface Props {
  villager: Villager;
}

/**
 * Display the villager's image, workstation, workstation recipe, and levels
 * @param {Props} props The villager to display
 */
function VillagerPresentation({ villager }: Props) {
  /**
   * Returns the image URL based for the object
   * @param object The name of the object
   * @param isRecipe true if the image contains the string "*-recipe.*"
   * @returns  The URL of the object's image
   */
  const getImageSrc = (object: string, isRecipe: boolean): string => {
    let src: string;
    src = object.toLowerCase();
    src = src.replace(" ", "-");
    src = "./images/" + src;
    if (isRecipe) src = src + "-recipe.webp";
    else src = src + ".webp";
    return src;
  };

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

export default VillagerPresentation;
