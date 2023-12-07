import { Trade } from "../types/types";
import "../styling/Trade.css";

interface Props {
  profession: string;
  tradeArray: Trade[];
}

function TradeDisplay({ tradeArray, profession }: Props) {
  console.log("displaying trades");
  console.log(tradeArray);
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
            <div className="col-sm-5 qty-style">
              <div className="row">
                {/* First item watned */}
                <div className="row">
                  <div className="col-sm-7">{trade.qtyWanted}</div>
                  <div className="col-sm-5">
                    <img
                      className="img-style"
                      src={getItemSrc(trade.itemWanted, trade.itemWantedGif)}
                      alt={trade.itemWanted}
                    ></img>
                  </div>
                </div>

                {/* Second item watned if qty is not 0*/}
                {trade.secQtyWanted !== "0" ? (
                  <div className="row">
                    <div className="col-sm-7">{trade.secQtyWanted}</div>
                    <div className="col-sm-5">
                      <img
                        className="img-style"
                        src={getItemSrc(trade.secItemWanted, false)}
                        alt={trade.secItemWanted}
                      ></img>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="col-sm-2">
              <img
                className="img-fluid img-style"
                src={"./gui/trade-arrow.webp"}
                alt={"Right Arrow"}
              ></img>
            </div>
            <div className="col-sm-3">
              <img
                className="img-fluid img-style"
                src={getItemSrc(trade.itemGiven, trade.itemGivenGif)}
                alt={trade.itemGiven}
              ></img>
            </div>
            <div className="col-sm-1 qty-style">{trade.qtyGiven}</div>
          </div>
        ))
      }
    </>
  );
}

/**
 * Takes an item name and returns the filepath of the item in the public directory
 * @param item the name of the item
 * @returns the public directory filepath to the image
 */
function getItemSrc(item: string, isGif: boolean): string {
  let src: string;
  src = item.toLowerCase();
  // Replace all spaces
  src = src.replace(/ /g, "-");
  src = "./items/" + src;
  if (isGif) src = src + ".gif";
  else src = src + ".png";
  return src;
}

export default TradeDisplay;