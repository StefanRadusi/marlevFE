import React from 'react';

export function ProductDescriptionItem({item}) {
  if (item === null || item === undefined) {
    return null;
  }

  return (
      <React.Fragment>
        <h4>{item.title}</h4>
        <ul>
          {item.items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </React.Fragment>);
}
