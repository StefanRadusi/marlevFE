import React from "react";

import {Product} from './Product/Product';
import {data} from './data'
import "../../SinglePage/SinglePage.scss";

export function Accesorii() {
  return (
      <div className="single-page-container">
        <div className="single-page-container__title">
          <h1 className="gard-title">Acesorii automatizari porti</h1>
          <span className="gard-separator-line"/>
        </div>
        {data.map((product, index) =>
            <Product key={index} product={product}
                     isLast={index === data.length - 1}/>)}
      </div>
  );
}
