import React from "react";

import {data, images} from './data';
import {Product} from "../Product/Product";
import {Images} from '../../../common/Images/Images';
import "../../SinglePage/SinglePage.scss";

export function AutomatizariPortiBalante() {
  return (
      <div className="single-page-container">
        <div className="single-page-container__title">
          <h1 className="gard-title">Automatizari porti batante</h1>
          <span className="gard-separator-line"/>
        </div>
        {data.map((product, index) =>
            <Product key={index} product={product}
                     isLast={index === data.length - 1}/>)}
        <Images images={images}/>
      </div>
  );
}
