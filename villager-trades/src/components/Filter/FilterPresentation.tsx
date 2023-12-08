import Button from "./Button";
import { TradingItem } from "../../types/types";

interface Props {
  whiteListItems: (tradingItems: TradingItem[]) => void;
  blackListItems: (tradingItems: TradingItem[]) => void;
}

function FilterPresentation({ whiteListItems, blackListItems }: Props) {
  const option1: TradingItem[] = [
    { name: "Diamond Axe", direction: "giving" },
    { name: "Diamond Shovel", direction: "giving" },
  ];

  return (
    <>
      <div className="row border border-secondary">
        <div className="col-sm-1">Buying:</div>
        <div className="col">
          <div className="row">
            <div className="form-check form-check-inline">
              <Button
                imageSrc=".\items\diamond-pickaxe.png"
                tradingItems={option1}
                whiteListItems={whiteListItems}
                blackListItems={blackListItems}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterPresentation;
