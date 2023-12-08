import VillagerListPresentation from "./VillagerListPresentation";
import { useEffect, useState } from "react";
import { Villager, Level, Trade } from "../../types/types";

interface Props {
  whiteListGiving: string[];
  whiteListWanted: string[];
}

function VillagerListContainer({ whiteListWanted, whiteListGiving }: Props) {
  // All villagers and their trades
  const [entireVillagerArray, setEntireVillagerArray] = useState<Villager[]>(
    []
  );

  // Villagers and trades passing the filter
  const [filteredVillagerArray, setFilteredVillagerArray] = useState<
    Villager[]
  >([]);

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
                itemWantedGif: trade.itemWantedGif || false,
                secQtyWanted: trade.secQtyWanted || "0",
                secItemWanted: trade.secItemWanted || "",
                qtyGiven: trade.qtyGiven,
                itemGiven: trade.itemGiven,
                itemGivenGif: trade.itemGivenGif || false,
                Notes: trade.Notes || "",
              })),
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

  // Apply the filter to entireVillagerArray
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
        level.trades = [...filteredTradeArray];
      });
    });

    // Filter out any levels with no trades
    currVillagerArray.forEach((villager: Villager) => {
      const filteredLevels: Level[] = villager.levels.filter((level: Level) => {
        return level.trades.length > 0;
      });

      villager.levels = [...filteredLevels];
    });

    // Filter out any villagers with no levels
    currVillagerArray = currVillagerArray.filter((villager: Villager) => {
      return villager.levels.length > 0;
    });
    setFilteredVillagerArray(currVillagerArray);
    console.log("Filltered out villagers and their trades");
  };

  // Only call ApplyFilter when the user clicks a filter button
  useEffect(() => {
    if (entireVillagerArray.length > 0) ApplyFilter();
  }, [whiteListWanted, whiteListGiving]);

  // Display all the villagers with the filter applied
  return <VillagerListPresentation villagers={filteredVillagerArray} />;
}

export default VillagerListContainer;
