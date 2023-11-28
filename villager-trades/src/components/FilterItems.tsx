import { Item } from "../types/types";
import CheckButton from "./CheckButton";

interface Props {
  direction: "wanted" | "giving";
  itemArray: Item[];
  whiteListItem: (itemName: string, direction: "wanted" | "giving") => void;
  blackListItem: (itemName: string, direction: "wanted" | "giving") => void;
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
              {itemArray.map((item: Item) => (
                <div key={direction + item.name} className="form-check-inline">
                  <CheckButton
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
