/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';

const Product = (props) => {
  return (
    <div className="product-container">
      <span style={{ 'font-weight': 'bold' }}>{props.name}</span>
      <img
        className="image-size"
        src={require('./assets/product_image_placeholder.png')}
        alt="product"
      />
      <div className="tag-container">
        <span>{props.price}</span>
        <button onClick={props.onClick}>add to cart</button>
      </div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Product;
