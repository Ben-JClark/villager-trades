import { Trade } from "../types/types";

interface Props {
  tradeArray: Trade[];
}

function TradeContent({ tradeArray }: Props) {
  return (
    <>
      <div className="col-sm-9">
        {
          /* Display all the villager trades in seperate rows */
          tradeArray.map((trade: Trade) => (
            <div key={trade.id} className="row">
              <p>
                {trade.level} {trade.qtyWanted} {trade.itemWanted.name} for{" "}
                {trade.qtyGiven} {trade.itemGiven.name}
              </p>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default TradeContent;
