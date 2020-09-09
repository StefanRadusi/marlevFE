import React, { useState } from "react";

import "./Cart.scss";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { mergeCssClass } from "../../../../utils";
import {
  storeToLocalStorage,
  generateCartItem,
  getInitialNrOfItems,
} from "./CartUtils";
import { withRouter } from "react-router-dom";

export const Cart = withRouter(({ panel, item, history }) => {
  const [nrOfItems, setNrOfItems] = useState(getInitialNrOfItems());

  return (
    <div
      className={mergeCssClass("cart-container")}
      onClick={() => {
        setNrOfItems(nrOfItems + 1);
        storeToLocalStorage(generateCartItem(panel, item));
      }}
    >
      <AddShoppingCartIcon />
      <p className="cart-text">Adauga oferta</p>

      {nrOfItems !== 0 && (
        <div
          className="cart-nr-of-items"
          onClick={(event) => {
            event.stopPropagation();
            history.push("/oferte-salvate");
          }}
        >
          <p>{nrOfItems}</p>
          <p className="go-to-cart-page">vezi oferte</p>
        </div>
      )}
    </div>
  );
});
