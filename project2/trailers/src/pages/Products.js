import React from "react";
import ProductCard from "../ui/ProductCard";
import PRODUCTS from "../data/products";
import "../App.css";

export default function Products({ addToCart }) {
  return (
    <>
      <h2 className="producttitle">Products</h2>
      <section className="cardcontainer">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} />
            <p className="productname">
              {product.title} <s>${product.was?.toFixed(2) || ""}</s>
              <span> ${product.basePrice.toFixed(2)}</span>
            </p>

            <button
              className="btn_addcart"
              onClick={() => addToCart && addToCart(product)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </section>
    </>
  );
}
