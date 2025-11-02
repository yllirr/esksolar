import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, changeLanguage, isAlbanian } = useLanguage();

  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="logo">
            <img src={`${process.env.PUBLIC_URL}/foto/logo.jpeg`} alt="ESK Solar" className="logo-img" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="nav-menu desktop-nav">
            <Link to="/">{getTranslation(language, 'nav.home')}</Link>
            <Link to="/products">{getTranslation(language, 'nav.products')}</Link>
            <Link to="/blog">{getTranslation(language, 'nav.blog')}</Link>
            <Link to="/contact">{getTranslation(language, 'nav.contact')}</Link>
          </nav>
          
          {/* Language Toggle */}
          <button 
            className="language-toggle desktop-quote"
            onClick={() => changeLanguage(isAlbanian ? 'en' : 'sq')}
            title={isAlbanian ? 'Switch to English' : 'Kthehu në Shqip'}
          >
            {isAlbanian ? 'EN' : 'SQ'}
          </button>
          
          {/* Desktop Quote Button */}
          <button className="btn-quote-header desktop-quote">{getTranslation(language, 'nav.getQuote')}</button>
          
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
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>{getTranslation(language, 'nav.home')}</Link>
          <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>{getTranslation(language, 'nav.products')}</Link>
          <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>{getTranslation(language, 'nav.blog')}</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>{getTranslation(language, 'nav.contact')}</Link>
          
          {/* Mobile Language Toggle */}
          <button 
            className="language-toggle-mobile"
            onClick={() => changeLanguage(isAlbanian ? 'en' : 'sq')}
          >
            {isAlbanian ? 'English' : 'Shqip'}
          </button>
          
          <button className="btn-quote-mobile">{getTranslation(language, 'nav.getQuote')}</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
