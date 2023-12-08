import { useState } from "react";
import Header from "./Header";
import Content from "./VillagerList/VillagerListContainer";
import FilterContainer from "./Filter/FilterContainer";

function App() {
  // A whiteList used to show villagers and trades involving the item
  const [whiteListGiving, setwhiteListGiving] = useState<string[]>([]);
  const [whiteListWanted, setwhiteListWanted] = useState<string[]>([]);

  // Add an item to the whitelist
  const whiteListItem = (
    whitelistItem: string,
    direction: "wanted" | "giving"
  ) => {
    if (direction === "giving") {
      const whiteList: string[] = [...whiteListGiving, whitelistItem];
      setwhiteListGiving(whiteList);
    } else {
      const whiteList: string[] = [...whiteListWanted, whitelistItem];
      setwhiteListWanted(whiteList);
    }
  };

  // Remove an item from the whitelist
  const blackListItem = (
    blacklistItem: string,
    direction: "wanted" | "giving"
  ) => {
    if (direction === "giving") {
      const whiteList: string[] = whiteListGiving.filter((item) => {
        if (item !== blacklistItem) return true;
      });
      setwhiteListGiving(whiteList);
    } else {
      const whiteList: string[] = whiteListWanted.filter((item) => {
        if (item !== blacklistItem) return true;
      });
      setwhiteListWanted(whiteList);
    }
  };

  return (
    <>
      <Header />
      <FilterContainer
        whiteListItem={whiteListItem}
        blackListItem={blackListItem}
      />
      <Content
        whiteListGiving={whiteListGiving}
        whiteListWanted={whiteListWanted}
      />
    </>
  );
}

export default App;
