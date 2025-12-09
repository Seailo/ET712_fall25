import React from "react";
import "../App.css";

export default function ProductCard({ product, onOpen }) {
  return (
    <article className="product-card" onClick={onOpen}>
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-body">
        <h4>{product.title}</h4>
        <p className="brand">{product.brand}</p>
        <div className="price">${product.basePrice.toFixed(2)}</div>
      </div>
    </article>
  );
}
