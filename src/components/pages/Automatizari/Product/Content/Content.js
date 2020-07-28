import React from 'react';
import './Contents.scss';
import {ProductDescriptionItem} from './ProductDescriptionItem/ProductDescriptionItem';

export function Content({content, advantages, combinedUsage}) {
  return (
      <div className="product--content--composition--content">
        <ProductDescriptionItem item={{title: "Contine:", items: content}}/>
        <ProductDescriptionItem
            item={{title: "Beneficii:", items: advantages}}/>
        {combinedUsage && <ProductDescriptionItem item={{
          title: combinedUsage.title,
          items: combinedUsage.description
        }}/>}
      </div>
  );
}
