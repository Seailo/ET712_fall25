import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar({ cartCount }) {
  return (
    <header className="navbar">
      <div className="nav-left">
        <Link to="/" className="brand">SneakMock</Link>
      </div>

      <nav className="nav-links">
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/cart" className="nav-link">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
}
