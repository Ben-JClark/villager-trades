import { Trade } from "../types/types";
import { getItemSrc } from "./FilterButton";
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
            <div className="col-sm-3 qty-style">{trade.qtyWanted}</div>
            <div className="col-sm-3">
              <img
                className="img-fluid img-style"
                src={getItemSrc(trade.itemWanted)}
                alt={trade.itemWanted}
              ></img>
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
                src={getItemSrc(trade.itemGiven)}
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

export default TradeDisplay;
