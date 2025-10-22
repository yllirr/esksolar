import React from 'react';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './PlanPricing.css';

const PlanPricing = () => {
  const { language } = useLanguage();
  
  return (
    <section className="plan-pricing">
      <div className="plan-pricing-wrapper">
        {/* Left Side - Content */}
        <div className="plan-content-section">
          <div className="plan-content">
            <span className="plan-subtitle">{getTranslation(language, 'planPricing.subtitle')}</span>
            <h2 className="plan-title">{getTranslation(language, 'planPricing.title')}</h2>
            <p className="plan-description">
              {getTranslation(language, 'planPricing.description')}
            </p>
            
            <div className="plan-features">
              <div className="plan-feature">
                <div className="plan-feature-icon">
                  <img src="/foto/icons/Frame 35.png" alt="" className="feature-icon-img" />
                </div>
                <p className="plan-feature-text">{getTranslation(language, 'planPricing.features.feature1')}</p>
              </div>

              <div className="plan-feature">
                <div className="plan-feature-icon">
                  <img src="/foto/icons/Frame 36.png" alt="" className="feature-icon-img" />
                </div>
                <p className="plan-feature-text">{getTranslation(language, 'planPricing.features.feature2')}</p>
              </div>

              <div className="plan-feature">
                <div className="plan-feature-icon">
                  <img src="/foto/icons/Frame 38.png" alt="" className="feature-icon-img" />
                </div>
                <p className="plan-feature-text">{getTranslation(language, 'planPricing.features.feature3')}</p>
              </div>
            </div>

            <button className="plan-cta-btn">
              {getTranslation(language, 'planPricing.ctaButton')}
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="plan-image-section">
          <div className="plan-image-container"></div>
        </div>
      </div>
    </section>
  );
};

export default PlanPricing;
