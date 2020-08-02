import React from 'react';

import {Component} from './Component/Component';
import './Components.scss';

export function Components({components}) {
  return (
      <div className="product--content--composition--component">
        {components.map(
            (component, index) =>
                <div className="component-container">
                  <h4>{component.title}</h4>
                  <img className="accessory-product-img" src={component.image} alt={component.title}/>
                  <Component key={index} component={component}/>
                  <p>cod: {component.cod}</p>
                </div>)}
      </div>);
}
