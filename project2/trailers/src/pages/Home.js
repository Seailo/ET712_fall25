import React from "react";
import "../App.css";
import Hero from "../sections/Hero";
import PRODUCTS from "../data/products";
import ProductCard from "../ui/ProductCard";

export default function Home() {
  // Home shows hero and a brief "popular" row
  const featured = PRODUCTS.slice(0, 4);
  return (
    <>
      <Hero />
      <main>
        <section className="intro">
          <h2>Featured drops & curated picks</h2>
          <p>This demo uses realistic prices — click Products for the full catalog.</p>
        </section>

        <section className="popular-grid">
          <h3>Popular Right Now</h3>
          <div className="grid">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} onOpen={() => {}} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
