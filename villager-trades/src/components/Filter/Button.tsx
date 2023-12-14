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

/**
 * A checkbox button that adds or removes items from a whitelist when pressed
 * @param {Props} props The button properties
 */
function Button({
  buttonId,
  name,
  tradingItems,
  whiteListItems,
  blackListItems,
}: Props) {
  // State to track the checkbox's check state
  const [isChecked, setIsChecked] = useState<boolean>(false);

  /**
   * Updates the checkbox's check state and adds or removes items from the whitelist
   */
  const onChange = () => {
    const checked: boolean = !isChecked;
    setIsChecked(checked);
    if (checked) {
      whiteListItems(tradingItems);
    } else {
      blackListItems(tradingItems);
    }
  };

  /**
   * Returns the image URL based on the item name
   * @param item The name of the item
   * @returns  The URL of the item image
   */
  const getImageSrc = (item: string): string => {
    let src: string;
    src = item.toLowerCase();
    src = src.replace(/ /g, "-"); // Replace all spaces with dashes
    src = "./images/" + src + ".gif";
    return src;
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

export default Button;
