import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ cartCount }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
    if (window.location.pathname === '/') {
      window.dispatchEvent(new CustomEvent('resetFilters'));
    }
  };

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
    window.dispatchEvent(new CustomEvent('resetFilters'));
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={handleLogoClick}>
          <h1>Kick Theory</h1>
        </div>
        <nav className="nav">
          <button className="nav-link" onClick={handleHomeClick}>
            Home
          </button>
          <Link to="/cart" className="cart-button">
            <span className="cart-text">Cart</span>
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;