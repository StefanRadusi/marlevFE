import uniqid from "uniqid";
import { priceFormula } from "../CalcPreview/DimensionsEditor/DimensiosEditorUtils";

export function getInitialNrOfItems() {
  const cartItems = localStorage.getItem("cart-items");

  if (cartItems) {
    return JSON.parse(cartItems).length;
  }

  return 0;
}

export function generateCartItem(panel = {}, item = {}) {
  return {
    ...item,
    ...panel,
    id: uniqid(),
  };
}

export function storeToLocalStorage(item) {
  const cartItems = localStorage.getItem("cart-items");
  const storedItem = {
    id: item.id,
    title: item.title,
    width: item.width,
    height: item.height,
    noOfLamella: item.noOfLamella,
    heightOfLamella: item.heightOfLamella,
    price: priceFormula(
      item.width,
      item.height,
      item.heightOfLamella,
      item.path
    ),
  };
  storedItem.priceDisplayed = storedItem.price + " Ron";

  if (cartItems) {
    localStorage.setItem(
      "cart-items",
      JSON.stringify([...JSON.parse(cartItems), storedItem])
    );
  } else {
    localStorage.setItem("cart-items", JSON.stringify([storedItem]));
  }
}
