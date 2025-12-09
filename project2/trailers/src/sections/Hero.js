import React from "react";
import "../sections/hero.css";

export default function Hero() {
  return (
    <section className="hero" aria-label="Featured hero">
      <div className="hero-overlay">
        <div className="hero-inner">
          <h1>Classic &amp; Rare Sneakers</h1>
          <p>Realistic prices — demo storefront — made with React</p>
          <a href="/products" className="btn btn-cta">Browse Popular</a>
        </div>
      </div>
    </section>
  );
}
