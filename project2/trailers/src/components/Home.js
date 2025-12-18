import React, { useState, useEffect, useRef } from 'react';
import SidebarFilters from './SidebarFilters';
import ProductGrid from './ProductGrid';
import './Home.css';

const Home = ({ addToCart }) => {
  const [filters, setFilters] = useState({
    brands: [],
    colors: [],
    sizes: []
  });
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const productsRef = useRef(null);

  useEffect(() => {
    const handleResetFilters = () => {
      setFilters({ brands: [], colors: [], sizes: [] });
    };

    window.addEventListener('resetFilters', handleResetFilters);
    return () => window.removeEventListener('resetFilters', handleResetFilters);
  }, []);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Step Into Style</h1>
          <button className="hero-button" onClick={scrollToProducts}>
            Shop Now
          </button>
        </div>
      </section>

      <div className="main-layout">
        <SidebarFilters 
          filters={filters}
          setFilters={setFilters}
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
        />
        <div className="content-area" ref={productsRef}>
          <ProductGrid 
            filters={filters}
            addToCart={addToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;