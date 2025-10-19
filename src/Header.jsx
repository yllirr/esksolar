import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="logo">SunPulse</Link>
          
          {/* Desktop Navigation */}
          <nav className="nav-menu desktop-nav">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          
          {/* Desktop Quote Button */}
          <button className="btn-quote-header desktop-quote">Get a Quote</button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
          <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <button className="btn-quote-mobile">Get a Quote</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
