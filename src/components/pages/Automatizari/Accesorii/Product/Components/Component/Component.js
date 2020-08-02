import React from 'react';

export function Component({component}) {
  return (
      <ul>
        {component.description.map(
            (description, index) => <li key={index}>{description}</li>)}
      </ul>
  );
}
