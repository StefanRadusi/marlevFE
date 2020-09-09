import uniqid from "uniqid";

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

  if (cartItems) {
    localStorage.setItem(
      "cart-items",
      JSON.stringify([...JSON.parse(cartItems), item])
    );
  } else {
    localStorage.setItem("cart-items", JSON.stringify([item]));
  }
}
