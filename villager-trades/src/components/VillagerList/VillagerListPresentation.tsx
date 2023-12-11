import { Villager } from "../../types/types";
import VillagerPresentation from "./Villager/VillagerPresentation";
import "../../styling/Villager.css";

interface Props {
  villagers: Villager[];
}

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
