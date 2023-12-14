import Button from "./Button";
import { TradingItem, FilterOption } from "../../types/types";
import "../../styling/style.css";

interface Props {
  filterOptions: FilterOption[];
  whiteListItems: (tradingItems: TradingItem[]) => void;
  blackListItems: (tradingItems: TradingItem[]) => void;
}

/**
 * Displays all the filter options as buttons
 * @param {Props} props The differnt filter options and the functions to add and remove items from the whitelist
 */
function FilterPresentation({
  filterOptions,
  whiteListItems,
  blackListItems,
}: Props) {
  // Seperate the filter options into seperate arrays based on their position on the page

  const leftFilter: FilterOption | undefined = filterOptions.find(
    (filterOption) => {
      if (filterOption.position === "left") return true;
    }
  );

  const topFilters: FilterOption[] = filterOptions.filter((filterOption) => {
    if (filterOption.position === "top") return true;
  });

  const bottemFilters: FilterOption[] = filterOptions.filter((filterOption) => {
    if (filterOption.position === "bottem") return true;
  });

  // Display each FilterOption as a button on the page
  if (leftFilter !== undefined) {
    console.log("displaying filters");
    return (
      <>
        <div className="row">
          {/* Display the top row of filter buttons */}
          <div className="row mb-3">
            <div className="col-sm-2 filter-label align-center">
              Show Villagers Selling
            </div>
            {topFilters.map((filterOption: FilterOption) => (
              <div key={"1" + filterOption.name} className="col-sm-2">
                <Button
                  buttonId={"3" + filterOption.name}
                  name={filterOption.name}
                  tradingItems={filterOption.tradingItems}
                  whiteListItems={whiteListItems}
                  blackListItems={blackListItems}
                />
              </div>
            ))}
          </div>
          {/* Display the bottem row of filter buttons */}
          <div className="row mb-3">
            <div className="col-sm-2 filter-label align-center">
              Show Villagers Buying
            </div>
            {bottemFilters.map((filterOption: FilterOption) => (
              <div key={"1" + filterOption.name} className="col-sm-2">
                <Button
                  buttonId={"4" + filterOption.name}
                  name={filterOption.name}
                  tradingItems={filterOption.tradingItems}
                  whiteListItems={whiteListItems}
                  blackListItems={blackListItems}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Display the left "Show Everything" filter button */}
        <div className="row left-filter-align mb-3">
          <Button
            buttonId={"2" + leftFilter.name}
            name={leftFilter.name}
            tradingItems={leftFilter.tradingItems}
            whiteListItems={whiteListItems}
            blackListItems={blackListItems}
          />
        </div>
      </>
    );
  } else {
    console.log("not displaying filters");
  }
}

export default FilterPresentation;
