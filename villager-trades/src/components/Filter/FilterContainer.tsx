import FilterPresentation from "./FilterPresentation";
import { TradingItem, FilterOption } from "../../types/types";
import { useState, useEffect } from "react";

interface Props {
  whiteListItems: (tradingItems: TradingItem[]) => void;
  blackListItems: (tradingItems: TradingItem[]) => void;
}

function Filter({ whiteListItems, blackListItems }: Props) {
  // An array of item's that trades give
  const [filterOptions, setFilterOptions] = useState<FilterOption[]>([]);

  // Read in the filter data
  useEffect(() => {
    const getFilterTakingData = async () => {
      try {
        const response = await fetch("./filter-data.json");
        const filterOption: FilterOption[] = await response.json();
        setFilterOptions(filterOption);
      } catch (error) {
        console.error("Error getting filter taking data: ", error);
      }
    };

    getFilterTakingData();
  }, []);

  return (
    <>
      <FilterPresentation
        filterOptions={filterOptions}
        whiteListItems={whiteListItems}
        blackListItems={blackListItems}
      />
    </>
  );
}

export default Filter;
