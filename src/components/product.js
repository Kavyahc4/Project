import React from 'react';
const Product = ({ image, name ,price }) => {
  return (
<div className="product">
<img
  src={image}
  alt={name}
  className="product-image"
/>
<div className="product-details">
  <div className="product-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
  <div className="product-name">{name}</div>
  <div className="product-price">${price}</div>
</div>
</div>
);
};

export default Product;
