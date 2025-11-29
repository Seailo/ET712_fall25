import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  // Add item (prevent duplicates)
  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);

    if (!exists) {
      setCart([...cart, product]);
    }
  };

  // Remove item
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />

      <div className="container">
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
