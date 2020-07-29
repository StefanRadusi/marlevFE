import React from 'react';

import './Component.scss';

export function Component({component}) {
  return (
      <li key={component.id}>
        <p className="product_component--title">{component.title}</p>
        <ul>
          {component.description.map(
              (description, index) => <li key={index}>{description}</li>)}
        </ul>
      </li>
  );
}
