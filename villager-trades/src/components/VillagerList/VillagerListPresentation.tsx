import { Villager } from "../../types/types";
import VillagerPresentation from "./Villager/VillagerPresentation";
import "../../styling/style.css";

interface Props {
  villagers: Villager[];
}

/**
 * Map out each villager into seperate columns
 * @param {Props} props The villagers to display
 */
function VillagerListPresentation({ villagers }: Props) {
  return (
    <div className="row">
      {villagers.map((villager: Villager) => (
        <div
          key={villager.profession}
          className="col-md-4 villager-block-width"
        >
          <VillagerPresentation villager={villager} />
        </div>
      ))}
    </div>
  );
}

export default VillagerListPresentation;
