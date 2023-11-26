import { Item } from "../types/types";

interface Props {
  filter: "taking" | "giving";
  itemArray: Item[];
}

function FilterItems({ filter, itemArray }: Props) {
  return (
    <>
      <div className="row border border-secondary">
        <div className="col-sm-1">Trades {filter}</div>
        {/* TakingItems */}
        <div className="col">
          <div className="row">
            {/* <div className="d-flex flex-wrap"> */}
            <div className="form-check form-check-inline">
              {/* item 1 */}
              {itemArray.map((item: Item) => (
                <div key={filter + item.name} className="form-check-inline">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id={filter + item.name}
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-success py-0 px-0"
                    htmlFor={filter + item.name}
                  >
                    <img
                      src={item.image}
                      className="img-fluid"
                      style={{ width: "30px" }}
                      alt={item.name}
                    />
                  </label>
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
