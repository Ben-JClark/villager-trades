import { useEffect, useState } from "react";
import FilterItems from "./FilterItems";

interface Props {
  whiteListItem: (item: string, direction: "wanted" | "giving") => void;
  blackListItem: (item: string, direction: "wanted" | "giving") => void;
}

function Filter({ whiteListItem, blackListItem }: Props) {
  // An array of item's that trades take
  const [itemsTakingArray, setItemsTakingArray] = useState<string[]>([]);
  // An array of item's that trades give
  const [itemsGivingArray, setItemsGivingArray] = useState<string[]>([]);

  // Read in the filter data

  useEffect(() => {
    const getFilterTakingData = async () => {
      try {
        const response = await fetch("./filter-taking-data.json");
        const filterTakingData = await response.json();
        setItemsTakingArray(filterTakingData);
      } catch (error) {
        console.error("Error getting filter taking data: ", error);
      }
    };

    const getFilterGivingData = async () => {
      try {
        const respone = await fetch("./filter-giving-data.json");
        const filterGivingData = await respone.json();
        setItemsGivingArray(filterGivingData);
      } catch (error) {
        console.error("Error getting filter giving data: ", error);
      }
    };

    getFilterTakingData();
    getFilterGivingData();
  }, []);

  return (
    <>
      <FilterItems
        whiteListItem={whiteListItem}
        blackListItem={blackListItem}
        direction={"wanted"}
        itemArray={itemsTakingArray}
      />
      <FilterItems
        whiteListItem={whiteListItem}
        blackListItem={blackListItem}
        direction={"giving"}
        itemArray={itemsGivingArray}
      />
    </>
  );
}

export default Filter;
