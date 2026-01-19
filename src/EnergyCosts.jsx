import React from 'react';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './EnergyCosts.css';

const EnergyCosts = () => {
  const { language } = useLanguage();

  return (
    <section className="energy-costs-section">
      <div className="energy-costs-wrapper">
        <div className="energy-costs-image-container">
          <img src="/foto/foto1.jpg" alt="Energy Costs" className="energy-costs-image" />
          <div className="energy-costs-overlay"></div>
        </div>
        <div className="energy-costs-content">
          <div className="container">
            <h2 className="energy-costs-title">
              {getTranslation(language, 'energyCosts.title')}
            </h2>
            <div 
              className="energy-costs-copy"
              dangerouslySetInnerHTML={{ __html: getTranslation(language, 'energyCosts.copy') }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergyCosts;
