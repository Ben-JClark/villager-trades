import Button from "./Button";
import { TradingItem, FilterOption } from "../../types/types";
import "../../styling/Filter.css";

interface Props {
  filterOptions: FilterOption[];
  whiteListItems: (tradingItems: TradingItem[]) => void;
  blackListItems: (tradingItems: TradingItem[]) => void;
}

function FilterPresentation({
  filterOptions,
  whiteListItems,
  blackListItems,
}: Props) {
  console.log(filterOptions);

  // Seperate the FilterOptions into seperate arrays variables on their positon

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

  // If the left filter isn't undefined display the filter buttons
  if (leftFilter !== undefined) {
    console.log("displaying filters");
    return (
      <>
        <div className="row mb-4">
          {/* Display the left "Show Everything" filter button */}
          <div className="col-sm-2">
            <div className="left-filter-style w-100 h-100">
              <Button
                buttonId={"2" + leftFilter.name}
                name={leftFilter.name}
                tradingItems={leftFilter.tradingItems}
                whiteListItems={whiteListItems}
                blackListItems={blackListItems}
              />
            </div>
          </div>
          <div className="col-sm-10">
            {/* Display the top row of filter buttons*/}
            <div className="row mb-3">
              <div className="col-sm-4 filter-style">
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
            {/* Display the bottem row of filter buttons*/}
            <div className="row">
              <div className="col-sm-4 filter-style">Show Villagers Buying</div>
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
        </div>
      </>
    );
  } else {
    console.log("not displaying filters");
  }
}

export default FilterPresentation;
