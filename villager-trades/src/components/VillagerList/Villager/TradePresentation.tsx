import { Trade } from "../../../types/types";
import "../../../styling/style.css";
import ItemPresentation from "./ItemPresentation";

interface Props {
  profession: string;
  tradeArray: Trade[];
}

/**
 * Display each trade as a row containing the a trades items and quantities
 * @param {Props} props The trades to display
 */
function TradePresentation({ tradeArray, profession }: Props) {
  return (
    <>
      {
        /* Display all the villager trades in seperate rows */
        tradeArray.map((trade: Trade) => (
          <div
            key={profession + trade.itemWanted + trade.itemGiven}
            className="row trade-style"
          >
            {/* Display the first and second qty wanted */}
            <div className="col-sm-5">
              <div className="row">
                {/* First item watned */}
                <ItemPresentation
                  itemQty={trade.qtyWanted}
                  itemName={trade.itemWanted}
                  isGif={trade.itemWantedGif}
                />

                {/* Second item watned if qty is not 0*/}
                {trade.secQtyWanted !== "0" ? (
                  <ItemPresentation
                    itemQty={trade.secQtyWanted}
                    itemName={trade.secItemWanted}
                    isGif={false}
                  />
                ) : null}
              </div>
            </div>

            <div className="col-sm-2">
              <img
                className="trade-image"
                src={"./images/trade-arrow.webp"}
                alt={"Right Arrow"}
              ></img>
            </div>
            <div className="col-sm-3">
              <ItemPresentation
                itemQty={trade.qtyGiven}
                itemName={trade.itemGiven}
                isGif={trade.itemGivenGif}
              />
            </div>
          </div>
        ))
      }
    </>
  );
}

export default TradePresentation;
