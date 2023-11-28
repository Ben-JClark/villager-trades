import VillagerContent from "./VillagerContent";
import { useEffect, useState } from "react";
import { Villager, Trade } from "../types/types";

interface Props {
  whiteListGiving: string[];
  whiteListWanted: string[];
}

function Content({ whiteListWanted, whiteListGiving }: Props) {
  // State storing the villager array read in
  const [entireVillagerArray, setEntireVillagerArray] = useState<Villager[]>(
    []
  );

  // Map all villagers in villager-data.json to entireVillagerArray
  useEffect(() => {
    const getVillagerData = async () => {
      try {
        const response = await fetch("/villager-data.json"); // fetch from public directory
        const villagerData = await response.json();

        //entireVillagerArray.push(
        const readInVillagerData = villagerData.map((villager: Villager) => {
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
        });

        setEntireVillagerArray(readInVillagerData);
        console.log("Fetched villager data");
      } catch (error) {
        console.error("Error getting villager data: ", error);
      }
    };

    getVillagerData();
  }, []);

  // An array of the filtered villagers and their filtered trades
  const [filteredVillagerArray, setFilteredVillagerArray] = useState<
    Villager[]
  >([]);

  const ApplyFilter = () => {
    // Create a deep copy of entireVillagerArray
    let currVillagerArray: Villager[] = entireVillagerArray.map((villager) => ({
      ...villager,
      tradeArray: [...villager.tradeArray.map((trade) => ({ ...trade }))],
    }));

    // Filter each villagers trades
    currVillagerArray.forEach((villager) => {
      const filteredTradeArray = villager.tradeArray.filter((trade) => {
        // Check if the trade has a whitelisted giving or taking item
        const givingMatch = whiteListGiving.some((whiteListItem: string) => {
          if (whiteListItem === trade.itemGiven.name) return true;
        });
        const wantedMatch = whiteListWanted.some((whiteListItem: string) => {
          if (whiteListItem === trade.itemWanted.name) return true;
        });
        return givingMatch || wantedMatch;
      });
      villager.tradeArray = [...filteredTradeArray];
    });

    // Filter out any villagers with no trades
    currVillagerArray = currVillagerArray.filter((villager) => {
      return villager.tradeArray.length > 0;
    });
    setFilteredVillagerArray(currVillagerArray);
    console.log(currVillagerArray);
  };

  // Only call ApplyFilter when the user clicks a filter button
  useEffect(() => {
    if (entireVillagerArray.length > 0) ApplyFilter();
  }, [whiteListWanted, whiteListGiving]);

  return (
    <>
      <div className="row border border-secondary">
        {
          /* Display all the villagers in villagerData */
          filteredVillagerArray.map((villager: Villager) => (
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
