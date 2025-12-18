import React from 'react';
import './SidebarFilters.css';

const SidebarFilters = ({ filters, setFilters, isCollapsed, setIsCollapsed }) => {
  const brands = ['Nike', 'Adidas', 'Puma', 'New Balance', 'Converse', 'Vans'];
  const colors = ['Black', 'White', 'Red', 'Blue', 'Gray', 'Brown'];
  const sizes = ['7', '8', '9', '10', '11', '12'];

  const handleFilterChange = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }));
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <h2 className="sidebar-title">Find Your Perfect Pair</h2>
        <button className="collapse-button" onClick={toggleCollapse}>
          {isCollapsed ? '⟩' : '⟨'}
        </button>
      </div>
      
      {!isCollapsed && (
        <div className="sidebar-content">
          <div className="filter-group">
            <h3 className="filter-title">Brand</h3>
            <div className="filter-options">
              {brands.map(brand => (
                <label key={brand} className="filter-option">
                  <input
                    type="checkbox"
                    checked={filters.brands.includes(brand)}
                    onChange={() => handleFilterChange('brands', brand)}
                  />
                  <span className="checkmark"></span>
                  <span className="option-label">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3 className="filter-title">Color</h3>
            <div className="filter-options">
              {colors.map(color => (
                <label key={color} className="filter-option">
                  <input
                    type="checkbox"
                    checked={filters.colors.includes(color)}
                    onChange={() => handleFilterChange('colors', color)}
                  />
                  <span className="checkmark"></span>
                  <span className="option-label">{color}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3 className="filter-title">Size</h3>
            <div className="filter-options">
              {sizes.map(size => (
                <label key={size} className="filter-option">
                  <input
                    type="checkbox"
                    checked={filters.sizes.includes(size)}
                    onChange={() => handleFilterChange('sizes', size)}
                  />
                  <span className="checkmark"></span>
                  <span className="option-label">US {size}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default SidebarFilters;