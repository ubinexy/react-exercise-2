import React from 'react';
import Product from './Product';

function Products(props) {
  return props.products.map((element) => {
    return (
      <Product
        name={element.name}
        price={element.price}
        key={element.name}
        onClick={props.onClick}
      />
    );
  });
}

export default Products;
