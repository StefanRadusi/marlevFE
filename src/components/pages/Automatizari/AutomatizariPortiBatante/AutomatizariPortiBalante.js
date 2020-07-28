import React from "react";

import {automatizariPortiBalante} from "../data";
import {Product} from "../Product/Product";
import "../../SinglePage/SinglePage.scss";

export function AutomatizariPortiBalante() {
  return (
      <div className="single-page-container">
        <div className="single-page-container__title">
          <h1 className="gard-title">Automatizari porti batante</h1>
          <span className="gard-separator-line"/>
        </div>
        {automatizariPortiBalante.map(product => <Product product={product}/>)}
      </div>
  );
}
