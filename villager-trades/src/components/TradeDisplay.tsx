import { Trade } from "../types/types";
import { getItemSrc } from "./FilterButton";
import "../styling/Trade.css";

interface Props {
  tradeArray: Trade[];
}

function TradeDisplay({ tradeArray }: Props) {
  return (
    <>
      <div className="col-sm-9">
        {
          /* Display all the villager trades in seperate rows */
          tradeArray.map((trade: Trade) => (
            <div key={trade.id} className="row trade-style">
              <div className="col qty-style">{trade.qtyWanted}</div>
              <div className="col">
                <img
                  className="img-fluid img-style"
                  src={getItemSrc(trade.itemWanted)}
                  alt={trade.itemWanted}
                ></img>
              </div>
              <div className="col">
                <img
                  className="img-fluid img-style"
                  src={"./gui/trade-arrow.webp"}
                  alt={"Right Arrow"}
                ></img>
              </div>
              <div className="col">
                <img
                  className="img-fluid img-style"
                  src={getItemSrc(trade.itemGiven)}
                  alt={trade.itemGiven}
                ></img>
              </div>
              <div className="col qty-style">{trade.qtyGiven}</div>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default TradeDisplay;
