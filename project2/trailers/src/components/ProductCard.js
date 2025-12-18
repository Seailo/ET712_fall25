import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onProductClick }) => {
  return (
    <div className="product-card" onClick={() => onProductClick(product)}>
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
      </div>
      
      <div className="product-info">
        <div className="product-badges">
          <span className="brand-badge">{product.brand}</span>
          <span className="color-badge">{product.color}</span>
        </div>
        
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
        
        <div className="product-sizes">
          <span className="sizes-label">Sizes:</span>
          <div className="sizes-list">
            {product.sizes.map(size => (
              <span key={size} className="size-chip">{size}</span>
            ))}
          </div>
        </div>
        
        <button className="view-details-button">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;