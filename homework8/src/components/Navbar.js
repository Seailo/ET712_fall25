import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/" className="navbrand">My Store</Link>

      <Link to="/cart" className="navcart">
        Cart ({cartCount})
      </Link>
    </nav>
  );
}

export default Navbar;
