import VillagerDisplay from "./VillagerDisplay";
import { useEffect, useState } from "react";
import { Villager, Level, Trade } from "../types/types";

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
            workstation: villager.workstation,
            levels: villager.levels.map((level: Level) => ({
              ...level,
              level: level.level,
              trades: level.trades.map((trade: Trade) => ({
                ...trade,
                qtyWanted: trade.qtyWanted,
                itemWanted: trade.itemWanted,
                qtyGiven: trade.qtyGiven,
                itemGiven: trade.itemGiven,
              })),
            })),
          };
        });

        setEntireVillagerArray(readInVillagerData);
        console.log("Fetched villager data: ");
        console.log(readInVillagerData);
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
    let currVillagerArray: Villager[] = entireVillagerArray.map(
      (villager: Villager) => ({
        ...villager,
        levels: [
          ...villager.levels.map((level: Level) => ({
            ...level,
            trades: [
              ...level.trades.map((trade: Trade) => ({
                ...trade,
              })),
            ],
          })),
        ],
      })
    );

    // Filter each villagers trades
    currVillagerArray.forEach((villager: Villager) => {
      villager.levels.forEach((level: Level) => {
        const filteredTradeArray: Trade[] = level.trades.filter(
          (trade: Trade) => {
            // Check if the trade has a whitelisted giving or taking item
            const givingMatch = whiteListGiving.some(
              (whiteListItem: string) => {
                if (whiteListItem === trade.itemGiven) return true;
              }
            );
            const wantedMatch = whiteListWanted.some(
              (whiteListItem: string) => {
                if (whiteListItem === trade.itemWanted) return true;
              }
            );
            return givingMatch || wantedMatch;
          }
        );
        console.log("Filltered each villagers trades");
        console.log(filteredTradeArray);
        level.trades = [...filteredTradeArray];
      });
    });

    // Filter out any levels with no trades
    currVillagerArray.forEach((villager: Villager) => {
      const filteredLevels: Level[] = villager.levels.filter((level: Level) => {
        return level.trades.length > 0;
      });

      console.log("Filltered each villagers levels");
      console.log(filteredLevels);

      villager.levels = [...filteredLevels];
    });

    // Filter out any villagers with no levels
    currVillagerArray = currVillagerArray.filter((villager: Villager) => {
      return villager.levels.length > 0;
    });
    setFilteredVillagerArray(currVillagerArray);
    console.log("Final filtered villager array");
    console.log(currVillagerArray);
  };

  // Only call ApplyFilter when the user clicks a filter button
  useEffect(() => {
    if (entireVillagerArray.length > 0) ApplyFilter();
  }, [whiteListWanted, whiteListGiving]);

  return (
    <div className="row border border-secondary">
      {
        /* Display all the villagers in villagerData */
        filteredVillagerArray.map((villager: Villager) => (
          <div key={villager.profession} className="col-md-4">
            <VillagerDisplay villager={villager} />
          </div>
        ))
      }
    </div>
  );
}

export default Content;
