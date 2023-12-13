import { useState } from "react";
import { TradingItem } from "../../types/types";
import "../../styling/style.css";

interface Props {
  buttonId: string;
  name: string;
  tradingItems: TradingItem[];
  whiteListItems: (tradingItems: TradingItem[]) => void;
  blackListItems: (tradingItems: TradingItem[]) => void;
}

function Button({
  buttonId,
  name,
  tradingItems,
  whiteListItems,
  blackListItems,
}: Props) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onChange = () => {
    const checked: boolean = !isChecked;
    setIsChecked(checked);
    if (checked) {
      whiteListItems(tradingItems);
    } else {
      blackListItems(tradingItems);
    }
  };

  return (
    <>
      <input
        type="checkbox"
        className="btn-check"
        id={buttonId}
        autoComplete="off"
        onChange={() => {
          onChange();
        }}
      />
      <label
        className="btn btn-outline-success w-100 h-100 align-center"
        htmlFor={buttonId}
      >
        <div className="row">
          <div className="col align-center">
            <img
              src={getImageSrc(name)}
              className="button-image-width"
              alt={name}
            />
          </div>
          <div className="col button-text align-center">{name}</div>
        </div>
      </label>
    </>
  );
}

function getImageSrc(item: string): string {
  let src: string;
  src = item.toLowerCase();
  // Replace all spaces
  src = src.replace(/ /g, "-");
  src = "./filter/" + src + ".gif";
  return src;
}

export default Button;
