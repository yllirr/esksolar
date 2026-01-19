import React from 'react';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './CompleteSolutions.css';

const CompleteSolutions = () => {
  const { language } = useLanguage();

  return (
    <section className="complete-solutions-section">
      <div className="complete-solutions-image">
        <img src="/foto/foto2.jpg" alt="Solar Solutions" />
      </div>
      <div className="container">
        <h2 className="complete-solutions-title">
          {getTranslation(language, 'completeSolutions.title')}
        </h2>
        <div 
          className="complete-solutions-copy"
          dangerouslySetInnerHTML={{ __html: getTranslation(language, 'completeSolutions.copy') }}
        />
        <div className="complete-solutions-features">
          <div className="feature-item">
            <span className="feature-bullet">•</span>
            <span>{getTranslation(language, 'completeSolutions.feature1')}</span>
          </div>
          <div className="feature-item">
            <span className="feature-bullet">•</span>
            <span>{getTranslation(language, 'completeSolutions.feature2')}</span>
          </div>
          <div className="feature-item">
            <span className="feature-bullet">•</span>
            <span>{getTranslation(language, 'completeSolutions.feature3')}</span>
          </div>
          <div className="feature-item">
            <span className="feature-bullet">•</span>
            <span>{getTranslation(language, 'completeSolutions.feature4')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteSolutions;
