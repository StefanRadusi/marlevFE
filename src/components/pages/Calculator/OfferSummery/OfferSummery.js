import React, { useState } from "react";
import axios from "axios";

import "./OfferSummery.scss";
import { calcNumberOfLamellas } from "../CalcPreview/PanelPreview/panels/panelsUtils";
import { PageTitle } from "../../../common/PageTitle/PageTitle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Cart } from "../Cart/Cart";
import { mergeCssClass } from "../../../../utils";

export function sendOrder() {
  axios
    .post("Marlevapplication-env.eba-qwtttvih.us-east-2.elasticbeanstalk.com/comanda", {
      email: "dummyEmail",
      phone: 1234,
      details: "some details",
      comanda: "here is your order details boss",
    }, {})
    .then((res) => {
      console.log("greatSuccess");
    })
    .catch((err) => {
      console.log("unable to fulfill request bossu meu");
    });
}

export function OfferSummery({ width, height, heightOfLamella }) {
  const [showCart, setShowCart] = useState(false);

  const nrOfLamella = calcNumberOfLamellas(height, heightOfLamella);

  const framePrice = 10;
  const framePriceTotal = width * height * framePrice;

  const lamellaPrice = 15;
  const lamellaPriceTotal = Math.round(
    (width - 0.2) * heightOfLamella * lamellaPrice * nrOfLamella
  );

  const accessoriesPriceTotal = 20;

  return (
    <div className="offer-summery">
      <h3 className="calculator-page-title">Desfasurator</h3>

      <div className="offer-summery-table">
        <div className="offer-summery-row offer-summery-table-header">
          <div className="offer-summery-cell">
            <p>Componenta</p>
          </div>
          <div className="offer-summery-cell">
            <p>
              Ron / m <sup>2</sup>
            </p>
          </div>
          <div className="offer-summery-cell">
            <p>Nr unitati</p>
          </div>
          <div className="offer-summery-cell">
            <p>Dimensiuni (m)</p>
          </div>

          <div className="offer-summery-cell">
            <p>Sub Total (Ron)</p>
          </div>
        </div>
        <div className="offer-summery-row ">
          <div className="offer-summery-cell">
            <p>cadru</p>
          </div>
          <div className="offer-summery-cell">
            <p>{framePrice}</p>
          </div>
          <div className="offer-summery-cell">
            <p>1</p>
          </div>
          <div className="offer-summery-cell">
            <p>{`${width} x ${height}`}</p>
          </div>
          <div className="offer-summery-cell">
            <p>{framePriceTotal}</p>
          </div>
        </div>
        <div className="offer-summery-row ">
          <div className="offer-summery-cell">
            <p>lamele</p>
          </div>
          <div className="offer-summery-cell">
            <p>{lamellaPrice}</p>
          </div>
          <div className="offer-summery-cell">
            <p>{nrOfLamella}</p>
          </div>
          <div className="offer-summery-cell">
            <p>{`${width - 0.2} x ${heightOfLamella}`}</p>
          </div>
          <div className="offer-summery-cell">
            <p>{lamellaPriceTotal}</p>
          </div>
        </div>

        <div className="offer-summery-row ">
          <div className="offer-summery-cell">
            <p>acesorii</p>
          </div>
          <div className="offer-summery-cell">
            <p>-</p>
          </div>
          <div className="offer-summery-cell">
            <p>-</p>
          </div>
          <div className="offer-summery-cell">
            <p>-</p>
          </div>
          <div className="offer-summery-cell">
            <p>{accessoriesPriceTotal}</p>
          </div>
        </div>
      </div>
      <PageTitle
        title={`Total: ${
          framePriceTotal + lamellaPriceTotal + accessoriesPriceTotal
        } Ron`}
        className="total-title"
      />

      <div className="offer-summery-make-purchase">
        <div
          className={mergeCssClass(
            "cart-button",
            showCart && "cart-button-open"
          )}
        >
          <ShoppingCartIcon
            className={"cart-button-icon"}
            onClick={() => setShowCart(!showCart)}
          />
          <div className="cart-button-text-container">
            <p
              className="cart-button-text cart-button-order"
              onClick={() => setShowCart(!showCart)}
            >
              Plaseaza Comanda
            </p>

            <p
              className="cart-button-text cart-button-send"
              onClick={() => sendOrder()}
            >
              Trimite
            </p>
          </div>

          <Cart show={showCart} />
        </div>
      </div>
    </div>
  );
}
