import { useEffect, useState } from "react";
import { Item } from "../types/types";
import FilterItems from "./FilterItems";

function Filter() {
  // An array of item's that trades take
  const [itemsTakingArray, setItemsTakingArray] = useState<Item[]>([]);
  // An array of item's that trades give
  const [itemsGivingArray, setItemsGivingArray] = useState<Item[]>([]);

  // Read in the filter data

  useEffect(() => {
    const getFilterTakingData = async () => {
      try {
        const response = await fetch("./filter-taking-data.json");
        const filterTakingData = await response.json();

        setItemsTakingArray(
          filterTakingData.map((item: Item) => {
            return {
              name: item.name,
              image: item.image,
            };
          })
        );
      } catch (error) {
        console.error("Error getting filter taking data: ", error);
      }
    };

    const getFilterGivingData = async () => {
      try {
        const respone = await fetch("./filter-giving-data.json");
        const filterGivingData = await respone.json();

        setItemsGivingArray(
          filterGivingData.map((item: Item) => {
            return {
              name: item.name,
              image: item.image,
            };
          })
        );
      } catch (error) {
        console.error("Error getting filter giving data: ", error);
      }
    };

    getFilterTakingData();
    getFilterGivingData();
  }, []);

  return (
    <>
      <FilterItems filter={"taking"} itemArray={itemsTakingArray} />
      <FilterItems filter={"giving"} itemArray={itemsGivingArray} />
    </>
  );
}

export default Filter;
