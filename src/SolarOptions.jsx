import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './SolarOptions.css';

const SolarOptions = () => {
  const [hovered, setHovered] = useState(null); // 'home' | 'business' | null
  const { language } = useLanguage();

  const containerClass = `options-grid ${
    hovered === 'home' ? 'home-hover' : hovered === 'business' ? 'business-hover' : ''
  }`;

  return (
    <section className="solar-options">
      <div className={containerClass}
           onMouseLeave={() => setHovered(null)}>
        <div
          className="option-card option-home"
          onMouseEnter={() => setHovered('home')}
        >
          <div className="option-content">
            <h2 className="option-title">
              {getTranslation(language, 'hero.solarHome')}
            </h2>
            <Link to="/products/home" className="option-btn">
              {getTranslation(language, 'hero.residence')}
              <span className="option-arrow">→</span>
            </Link>
          </div>
        </div>
        
        <div
          className="option-card option-business"
          onMouseEnter={() => setHovered('business')}
        >
          <div className="option-content">
            <h2 className="option-title">
              {getTranslation(language, 'hero.solarBusiness')}
            </h2>
            <Link to="/products/business" className="option-btn">
              {getTranslation(language, 'hero.commercial')}
              <span className="option-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarOptions;
