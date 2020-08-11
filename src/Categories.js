import React from 'react';
import Products from './Products';

function Categories(props) {
  return props.category.map((element) => {
    return (
      <div key={element.category} className="category">
        <h2 style={{ margin: '20px' }}>{element.category}</h2>
        <div className="columns-container">
          <Products products={element.products} onClick={props.onClick} />
        </div>
      </div>
    );
  });
}

export default Categories;
