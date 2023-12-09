import { useState } from "react";
import { TradingItem } from "../types/types";
import Header from "./Header";
import VillagerListContainer from "./VillagerList/VillagerListContainer";
import FilterContainer from "./Filter/FilterContainer";

function App() {
  // A whiteList of Villagers to display
  const [whiteList, setwhiteList] = useState<TradingItem[]>([]);

  /**
   * Adds an array of TradingItem to the whiteList
   * @param tradingItems An array of TradingItem to be added to the whiteList
   */
  const whiteListItems = (tradingItems: TradingItem[]) => {
    const newWhiteList: TradingItem[] = [...whiteList, ...tradingItems];
    setwhiteList(newWhiteList);
  };

  /**
   * Removes an array of TradingItem from the whiteList
   * @param blackItems An array of TradingItem that are to be removed from the whitelist
   */
  const blackListItems = (blackItems: TradingItem[]) => {
    // Make a new whitelist without the blacklisted items
    const newWhiteList: TradingItem[] = whiteList.filter(
      (whiteItem: TradingItem) => {
        // Check if this whitelisted item is in the blacklist
        const itemIsBlacklisted = blackItems.some((blackItem: TradingItem) => {
          if (
            blackItem.name === whiteItem.name &&
            blackItem.direction === whiteItem.direction
          )
            return true;
        });
        // Return false if the whitelist item is in the blacklist so it gets filterd out
        return !itemIsBlacklisted;
      }
    );
    setwhiteList(newWhiteList);
  };

  return (
    <>
      <Header />
      <FilterContainer
        whiteListItems={whiteListItems}
        blackListItems={blackListItems}
      />
      <VillagerListContainer whiteList={whiteList} />
    </>
  );
}

export default App;
