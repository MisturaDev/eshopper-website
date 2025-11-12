import React from 'react';
import './Products.css';

function Products() {
  return (
    <div className="products">
      <h1>Our Products</h1>
      <p>Check out our latest collection!</p>
      <div className="product-list">
        <div className="product-card">Product 1</div>
        <div className="product-card">Product 2</div>
        <div className="product-card">Product 3</div>
      </div>
    </div>
  );
}

export default Products;
