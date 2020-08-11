import React from 'react';
import Products from './Products';

function Categories(props) {
  return props.category.map((element) => {
    return (
      <div key={element.category} className="category">
        <p>{element.category}</p>
        <Products products={element.products} onClick={props.onClick} />
      </div>
    );
  });
}

export default Categories;
