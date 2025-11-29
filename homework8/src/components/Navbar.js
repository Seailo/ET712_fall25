import React from "react";
import { Link } from "react-router-dom";
import storeIcon from "../images/store.png";
import cartIcon from "../images/cart.png";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link1">
        <img src={storeIcon} className="nav-icon" alt="" />
        Store
      </Link>

      <Link to="/cart" className="nav-link2">
        <img src={cartIcon} className="nav-icon" alt="" />
        Cart ({cartCount})
      </Link>
    </nav>
  );
}

export default Navbar;
