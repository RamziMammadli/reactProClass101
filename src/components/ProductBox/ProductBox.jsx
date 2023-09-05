import React from 'react';

function ProductBox({ product }) {
  const cardStyle = {
    padding: '10px',
    margin: '10px',
    width: '300px',
    // Diğer stil özellikleri burada eklenir
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={product.thumbnail} alt={product.title} style={imageStyle} />
      <div className="card-body">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Discount: {product.discountPercentage}%</p>
        <p>Rating: {product.rating}</p>
        <p>Stock: {product.stock}</p>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
      </div>
    </div>
  );
}

export default ProductBox;
