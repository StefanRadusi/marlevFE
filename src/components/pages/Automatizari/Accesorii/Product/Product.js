import React from "react";

import {Components} from './Components/Components';
import "./Product.scss";

export function Product(props) {
  const {product, isLast} = props;

  return (
      <div className={"product--accessories" + (isLast ? " last" : "")}>
        {product.image && <img className="image--full" src={product.image}
                               alt="img"/>}
        {product.title && <h3>{product.title}</h3>}
        <div className="product--content">
          <h4>{product.description}</h4>
          <p>{product.details}</p>
          <div className="product--content--composition">
            <Components components={product.components}/>
          </div>
        </div>
      </div>
  );
}
