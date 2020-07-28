import React from "react";

import {Components} from './Components/Components';
import {Content} from './Content/Content';
import "./Product.scss";

export function Product(props) {
  const {product, isLast} = props;

  return (
      <div className={"product" + (isLast ? " last" : "")}>
        {product.image && <img className="image--full" src={product.image}
                               alt="img"/>}
        <h3>{product.title}</h3>
        <div className="product--content">
          <ul>
            {product.description.map(
                (desc, index) => <li key={index}>{desc}</li>)}
          </ul>
          <div className="product--content--composition">
            <Components components={product.components}/>
            <Content content={product.content} advantages={product.advantages}
                     combinedUsage={product.combinedUsage}/>
          </div>
        </div>
      </div>
  );
}
