import React from 'react';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const { language } = useLanguage();
  
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-image">
        <img src="/foto/Frame410127946.png" alt="Why Choose Us" />
      </div>
      <div className="container">
        <h2 className="why-choose-us-title">
          {getTranslation(language, 'whyChooseUs.title')}
        </h2>
        
        <div className="why-choose-us-features">
          <div className="why-feature-item">
            <span className="why-feature-bullet">•</span>
            <span>{getTranslation(language, 'whyChooseUs.feature1')}</span>
          </div>
          <div className="why-feature-item">
            <span className="why-feature-bullet">•</span>
            <span>{getTranslation(language, 'whyChooseUs.feature2')}</span>
          </div>
          <div className="why-feature-item">
            <span className="why-feature-bullet">•</span>
            <span>{getTranslation(language, 'whyChooseUs.feature3')}</span>
          </div>
          <div className="why-feature-item">
            <span className="why-feature-bullet">•</span>
            <span>{getTranslation(language, 'whyChooseUs.feature4')}</span>
          </div>
          <div className="why-feature-item">
            <span className="why-feature-bullet">•</span>
            <span>{getTranslation(language, 'whyChooseUs.feature5')}</span>
          </div>
        </div>

        <p className="why-choose-us-copy">
          {getTranslation(language, 'whyChooseUs.copy')}
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;
