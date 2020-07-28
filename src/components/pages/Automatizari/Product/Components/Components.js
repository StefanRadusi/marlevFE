import React from 'react';

import './Components.scss';
import {Component} from './Component/Component';

export function Components({components}) {
  return (
      <div className="product--content--composition--component">
        <h4>Componente:</h4>
        <ul>
          {components.map((component, index) => <Component key={index} component={component}/>)}
        </ul>
      </div>);
}
