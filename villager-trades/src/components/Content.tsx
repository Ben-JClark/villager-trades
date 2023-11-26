import VillagerContent from "./VillagerContent";
import { useEffect, useState } from "react";
import { Villager, Trade } from "../types/types";

function Content() {
  // An array of villager's
  const [villagerArray, setVillagerArray] = useState<Villager[]>([]);

  // Read in villager data from villager-data.json
  useEffect(() => {
    const getVillagerData = async () => {
      try {
        const response = await fetch("/villager-data.json"); // fetch from public directory
        const villagerData = await response.json();

        setVillagerArray(
          villagerData.map((villager: Villager) => {
            return {
              profession: villager.profession,
              image: villager.image,
              workstation: {
                name: villager.workstation.name,
                image: villager.workstation.image,
              },
              tradeArray: villager.tradeArray.map((trade: Trade) => ({
                ...trade,
                id: trade.id,
                level: trade.level,
                qtyWanted: trade.qtyWanted,
                itemWanted: {
                  name: trade.itemWanted.name,
                  image: trade.itemWanted.image,
                },
                qtyGiven: trade.qtyGiven,
                itemGiven: {
                  name: trade.itemGiven.name,
                  image: trade.itemGiven.image,
                },
              })),
            };
          })
        );
      } catch (error) {
        console.error("Error getting villager data: ", error);
      }
    };

    getVillagerData();
  }, []);

  console.log(villagerArray);

  return (
    <>
      <div className="row border border-secondary">
        {
          /* Display all the villagers in villagerData */
          villagerArray.map((villager: Villager) => (
            <div key={villager.profession} className="col-md-3">
              <VillagerContent villager={villager} />
            </div>
          ))
        }
      </div>
    </>
  );
}

export default Content;
