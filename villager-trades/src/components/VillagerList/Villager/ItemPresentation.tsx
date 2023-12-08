interface Props {
  itemQty: string;
  itemName: string;
  isGif: boolean;
}

function ItemPresentation({ itemQty, itemName, isGif }: Props) {
  return (
    <div className="row">
      <div className="col-sm-7 qty-style">{itemQty}</div>
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

/**
 * Takes an item name and returns the filepath of the item in the public directory
 * @param item the name of the item
 * @returns the public directory filepath to the image
 */
function getItemSrc(item: string, isGif: boolean): string {
  let src: string;
  src = item.toLowerCase();
  // Replace all spaces
  src = src.replace(/ /g, "-");
  src = "./items/" + src;
  if (isGif) src = src + ".gif";
  else src = src + ".png";
  return src;
}

export default ItemPresentation;
