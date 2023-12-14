import "../../../styling/style.css";

interface Props {
  itemQty: string;
  itemName: string;
  isGif: boolean;
}

/**
 * A row containing an item as an image and a quantity as a string
 * @param {Props} props The details of the item
 */
function ItemPresentation({ itemQty, itemName, isGif }: Props) {
  /**
   * Returns the image URL based on the item name
   * @param item The name of the item
   * @param isGif true if the image has a .gif extension
   * @returns  The URL of the item image
   */
  const getItemSrc = (item: string, isGif: boolean): string => {
    let src: string;
    src = item.toLowerCase();
    src = src.replace(/ /g, "-"); // Replace all spaces with dashes
    src = "./images/" + src;
    if (isGif) src = src + ".gif";
    else src = src + ".png";
    return src;
  };

  return (
    <div className="row">
      <div className="col-sm-7 item-style">{itemQty}</div>
      <div className="col-sm-5">
        <img
          className="img-style"
          src={getItemSrc(itemName, isGif)}
          alt={itemName}
        ></img>
      </div>
    </div>
  );
}

export default ItemPresentation;
