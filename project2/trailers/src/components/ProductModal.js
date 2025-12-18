import React, { useState } from 'react';
import './ProductModal.css';

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  const handleQuantityChange = (delta) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        
        <div className="modal-body">
          <div className="modal-image-container">
            <img 
              src={product.image} 
              alt={product.name}
              className="modal-image"
            />
          </div>
          
          <div className="modal-info">
            <div className="modal-badges">
              <span className="brand-badge">{product.brand}</span>
              <span className="color-badge">{product.color}</span>
            </div>
            
            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-price">${product.price}</p>
            
            <p className="modal-description">{product.description}</p>
            
            <div className="modal-sizes">
              <h4>Available Sizes:</h4>
              <div className="sizes-grid">
                {product.sizes.map(size => (
                  <span key={size} className="size-option">
                    US {size}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="quantity-selector">
              <h4>Quantity:</h4>
              <div className="quantity-controls">
                <button 
                  className="quantity-btn" 
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  −
                </button>
                <span className="quantity-display">{quantity}</span>
                <button 
                  className="quantity-btn" 
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
            </div>
            
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;