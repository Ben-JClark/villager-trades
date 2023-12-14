import VillagerListPresentation from "./VillagerListPresentation";
import { useEffect, useState } from "react";
import { Villager, Level, Trade } from "../../types/types";
import { TradingItem } from "../../types/types";

interface Props {
  whiteList: TradingItem[];
}

/**
 * Fetches and Filteres the list of villagers
 * @param {Props} props The whitelist
 */
function VillagerListContainer({ whiteList }: Props) {
  // State of every villager and all their trades
  const [allVillagers, setAllVillagers] = useState<Villager[]>([]);

  // State of the villagers to show
  const [filteredVillagers, setFilteredVillagers] = useState<Villager[]>([]);

  /**
   * Only when mounting, fetch and map all villagers in villager-data.json to the hook allVillagers
   */
  useEffect(() => {
    const getVillagerData = async () => {
      try {
        const response = await fetch("./villager-data.json");
        const data = await response.json();

        const villagerData = data.map((villager: Villager) => {
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

        setAllVillagers(villagerData);
        console.log("Fetched villager data");
      } catch (error) {
        console.error("Error getting villager data: ", error);
      }
    };

    getVillagerData();
  }, []);

  /**
   * Apply the whiteList to allVillagers and store the filtered result in filteredVillagers
   */
  const ApplyFilter = () => {
    // Create a deep copy of allVillagers
    let currVillagerArray: Villager[] = allVillagers.map(
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

    // Use the whitelist to filter each villagers trades
    currVillagerArray.forEach((villager: Villager) => {
      villager.levels.forEach((level: Level) => {
        const filteredTradeArray: Trade[] = level.trades.filter(
          (trade: Trade) => {
            // Check if the item given in the trade is in the whitelist
            const givingMatch: boolean = whiteList.some(
              (whiteListItem: TradingItem) => {
                if (
                  whiteListItem.direction === "giving" &&
                  whiteListItem.name === trade.itemGiven
                )
                  return true;
              }
            );
            // Check if the item Wanted in the trade is in the whitelist
            const wantedMatch: boolean = whiteList.some(
              (whiteListItem: TradingItem) => {
                if (
                  whiteListItem.direction === "wanted" &&
                  whiteListItem.name === trade.itemWanted
                )
                  return true;
              }
            );
            // If the Item wanted or given in the trade is in the whitelist, return true
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
    setFilteredVillagers(currVillagerArray);
    console.log("Filltered out villagers and their trades");
  };

  // Only call ApplyFilter when the whiteList changes
  useEffect(() => {
    if (allVillagers.length > 0) ApplyFilter();
  }, [whiteList]);

  return <VillagerListPresentation villagers={filteredVillagers} />;
}

export default VillagerListContainer;
