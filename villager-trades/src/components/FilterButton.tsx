import { useState } from "react";

interface Props {
  item: string;
  direction: "wanted" | "giving";
  whiteListItem: (item: string, direction: "wanted" | "giving") => void;
  blackListItem: (item: string, direction: "wanted" | "giving") => void;
}

function FilterButton({
  item,
  direction,
  whiteListItem,
  blackListItem,
}: Props) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onChange = () => {
    const checked: boolean = !isChecked;
    setIsChecked(checked);
    if (checked) {
      whiteListItem(item, direction);
    } else {
      blackListItem(item, direction);
    }
  };

  return (
    <>
      <input
        type="checkbox"
        className="btn-check"
        id={direction + item}
        autoComplete="off"
        onChange={() => {
          onChange();
        }}
      />
      <label
        className="btn btn-outline-success py-0 px-0"
        htmlFor={direction + item}
      >
        <img
          src={getItemSrc(item)}
          className="img-fluid"
          style={{ width: "30px" }}
          alt={item}
        />
      </label>
    </>
  );
}

/**
 * Takes an item name and returns the filepath of the item in the public directory
 * @param item the name of the item
 * @returns the public directory filepath to the image
 */
function getItemSrc(item: string): string {
  let src: string;
  src = item.toLowerCase();
  src = src.replace(" ", "-");
  src = "./items/" + src + ".png";
  return src;
}

export { getItemSrc };
export default FilterButton;
