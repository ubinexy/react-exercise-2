import React from 'react';

function Product(props) {
  return (
    <div className="product">
      <span>{props.name}</span>
      <img className="image-size"
        src={require('./assets/product_image_placeholder.png')}
        alt="product"
      />
      <span>{props.price}</span>
      <button onClick={props.onClick}>add to cart</button>
    </div>
  );
}

export default Product;
