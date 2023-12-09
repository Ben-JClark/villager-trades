import { useState } from "react";
import { TradingItem } from "../../types/types";

interface Props {
  buttonId: string;
  imageSrc: string;
  tradingItems: TradingItem[];
  whiteListItems: (tradingItems: TradingItem[]) => void;
  blackListItems: (tradingItems: TradingItem[]) => void;
}

function FilterButton({
  buttonId,
  imageSrc,
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
      <label className="btn btn-outline-success py-0 px-0" htmlFor={buttonId}>
        <img
          src={imageSrc}
          className="img-fluid"
          style={{ width: "30px" }}
          alt={imageSrc}
        />
      </label>
    </>
  );
}

export default FilterButton;
