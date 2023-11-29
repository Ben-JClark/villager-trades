import FilterButton from "./FilterButton";

interface Props {
  direction: "wanted" | "giving";
  itemArray: string[];
  whiteListItem: (item: string, direction: "wanted" | "giving") => void;
  blackListItem: (item: string, direction: "wanted" | "giving") => void;
}

function FilterItems({
  direction,
  itemArray,
  whiteListItem,
  blackListItem,
}: Props) {
  return (
    <>
      <div className="row border border-secondary">
        <div className="col-sm-1">Trades {direction}</div>
        <div className="col">
          <div className="row">
            {/* <div className="d-flex flex-wrap"> */}
            <div className="form-check form-check-inline">
              {/* item 1 */}
              {itemArray.map((item: string) => (
                <div key={"1" + direction + item} className="form-check-inline">
                  <FilterButton
                    item={item}
                    direction={direction}
                    whiteListItem={whiteListItem}
                    blackListItem={blackListItem}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterItems;
