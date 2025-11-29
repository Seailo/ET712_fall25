import React from "react";
import products from "./products";


function ProductList({ addToCart }) {
  return (
    <div>
      <h2 className="page-title">Products</h2>

      <section className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt="" className="product-img" />

            <h3>{product.name}</h3>

            <p>${product.price.toFixed(2)}</p>

            <button onClick={() => addToCart(product)} className="btn">
              Add to Cart
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ProductList;
