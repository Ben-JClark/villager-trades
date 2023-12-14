import FilterPresentation from "./FilterPresentation";
import { TradingItem, FilterOption } from "../../types/types";
import { useState, useEffect } from "react";

interface Props {
  whiteListItems: (tradingItems: TradingItem[]) => void;
  blackListItems: (tradingItems: TradingItem[]) => void;
}

/**
 * Fetches and displays the filter buttons
 * @param {Props} props The functions to add and remove items from the whitelist
 */
function Filter({ whiteListItems, blackListItems }: Props) {
  // A state that keeps track of the filter buttons to dispaly
  const [filterOptions, setFilterOptions] = useState<FilterOption[]>([]);

  /**
   * Read in the filter json data only when the component mounts
   */
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

  // Display the filter options
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
