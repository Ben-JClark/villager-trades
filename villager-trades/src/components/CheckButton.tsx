import { Item } from "../types/types";
import { useState } from "react";

interface Props {
  item: Item;
  direction: "wanted" | "giving";
  whiteListItem: (itemName: string, direction: "wanted" | "giving") => void;
  blackListItem: (itemName: string, direction: "wanted" | "giving") => void;
}

function CheckButton({ item, direction, whiteListItem, blackListItem }: Props) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onChange = () => {
    const checked: boolean = !isChecked;
    setIsChecked(checked);
    if (checked) {
      whiteListItem(item.name, direction);
    } else {
      blackListItem(item.name, direction);
    }
  };

  return (
    <>
      <input
        type="checkbox"
        className="btn-check"
        id={direction + item.name}
        autoComplete="off"
        onChange={() => {
          onChange();
        }}
      />
      <label
        className="btn btn-outline-success py-0 px-0"
        htmlFor={direction + item.name}
      >
        <img
          src={item.image}
          className="img-fluid"
          style={{ width: "30px" }}
          alt={item.name}
        />
      </label>
    </>
  );
}

export default CheckButton;
