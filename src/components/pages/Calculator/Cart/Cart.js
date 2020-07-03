import React from "react";

import "./Cart.scss";
import { TextField, TextareaAutosize } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import { mergeCssClass } from "../../../../utils";

export function Cart({ show }) {
  return (
    <div
      className={mergeCssClass("cart-container", show && "cart-container-open")}
    >
      <div className="cart-field">
        <EmailIcon className="cart-field-icon" />
        <TextField label={"email"} className="cart-field-input" />
      </div>
      <div className="cart-field">
        <PhoneIcon className="cart-field-icon" />
        <TextField label={"mobil"} className="cart-field-input" />
      </div>

      <TextareaAutosize
        aria-label="minimum height"
        rowsMin={3}
        placeholder="Detalii comanda"
        className="cart-text-area"
      />
    </div>
  );
}
