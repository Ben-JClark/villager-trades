import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Filter from "./Filter";

function App() {
  // A whiteList used to show villagers and trades involving the item
  const [whiteListGiving, setwhiteListGiving] = useState<string[]>([]);
  const [whiteListWanted, setwhiteListWanted] = useState<string[]>([]);

  // Add an item to the whitelist
  const whiteListItem = (itemName: string, direction: "wanted" | "giving") => {
    if (direction === "giving") {
      const whiteList: string[] = [...whiteListGiving, itemName];
      setwhiteListGiving(whiteList);
    } else {
      const whiteList: string[] = [...whiteListWanted, itemName];
      setwhiteListWanted(whiteList);
    }
  };

  // Remove an item from the whitelist
  const blackListItem = (itemName: string, direction: "wanted" | "giving") => {
    if (direction === "giving") {
      const whiteList: string[] = whiteListGiving.filter((item) => {
        if (item !== itemName) return true;
      });
      setwhiteListGiving(whiteList);
    } else {
      const whiteList: string[] = whiteListWanted.filter((item) => {
        if (item !== itemName) return true;
      });
      setwhiteListWanted(whiteList);
    }
  };

  return (
    <>
      <Header />
      <Filter whiteListItem={whiteListItem} blackListItem={blackListItem} />
      <Content
        whiteListGiving={whiteListGiving}
        whiteListWanted={whiteListWanted}
      />
    </>
  );
}

export default App;
