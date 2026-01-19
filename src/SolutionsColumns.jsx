import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './SolutionsColumns.css';

const SolutionsColumns = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="solutions-columns-section">
      <div className="container">
        <div className="solutions-columns-grid">
          {/* Home Column */}
          <div className="solution-column solution-column-home">
            <div className="solution-column-image">
              <img src="/foto/happy-family-with-dog-moving-new-home.jpg" alt="Home Solar" />
            </div>
            <div className="solution-column-content">
              <div className="solution-column-header">
                <h3 className="solution-column-title">
                  {getTranslation(language, 'solutionsColumns.home.title')}
                </h3>
                <h4 className="solution-column-subtitle">
                  {getTranslation(language, 'solutionsColumns.home.subtitle')}
                </h4>
              </div>
              <ul className="solution-column-features">
                <li>
                  <span className="feature-check">✓</span>
                  <span>{getTranslation(language, 'solutionsColumns.home.feature1')}</span>
                </li>
                <li>
                  <span className="feature-check">✓</span>
                  <span>{getTranslation(language, 'solutionsColumns.home.feature2')}</span>
                </li>
                <li>
                  <span className="feature-check">✓</span>
                  <span>{getTranslation(language, 'solutionsColumns.home.feature3')}</span>
                </li>
                <li>
                  <span className="feature-check">✓</span>
                  <span>{getTranslation(language, 'solutionsColumns.home.feature4')}</span>
                </li>
              </ul>
              <button 
                className="solution-column-btn"
                onClick={() => navigate('/products/home')}
              >
                {getTranslation(language, 'solutionsColumns.home.button')}
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>

          {/* Business Column */}
          <div className="solution-column solution-column-business">
            <div className="solution-column-image">
              <img src="/foto/27151.jpg" alt="Business Solar" />
            </div>
            <div className="solution-column-content">
              <div className="solution-column-header">
                <h3 className="solution-column-title">
                  {getTranslation(language, 'solutionsColumns.business.title')}
                </h3>
                <h4 className="solution-column-subtitle">
                  {getTranslation(language, 'solutionsColumns.business.subtitle')}
                </h4>
              </div>
              <ul className="solution-column-features">
                <li>
                  <span className="feature-check">✓</span>
                  <span>{getTranslation(language, 'solutionsColumns.business.feature1')}</span>
                </li>
                <li>
                  <span className="feature-check">✓</span>
                  <span>{getTranslation(language, 'solutionsColumns.business.feature2')}</span>
                </li>
                <li>
                  <span className="feature-check">✓</span>
                  <span>{getTranslation(language, 'solutionsColumns.business.feature3')}</span>
                </li>
                <li>
                  <span className="feature-check">✓</span>
                  <span>{getTranslation(language, 'solutionsColumns.business.feature4')}</span>
                </li>
              </ul>
              <button 
                className="solution-column-btn"
                onClick={() => navigate('/products/business')}
              >
                {getTranslation(language, 'solutionsColumns.business.button')}
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>

          {/* Installers Column */}
          <div className="solution-column solution-column-installers">
            <div className="solution-column-image">
              <img src="/rreth-nesh/installer.webp" alt="Installers" />
            </div>
            <div className="solution-column-content">
              <div className="solution-column-header">
                <h3 className="solution-column-title">
                  {getTranslation(language, 'solutionsColumns.installers.title')}
                </h3>
                <h4 className="solution-column-subtitle">
                  {getTranslation(language, 'solutionsColumns.installers.subtitle')}
                </h4>
              </div>
              <ul className="solution-column-features">
                <li>
                  <span className="feature-check">✓</span>
                  <span>{getTranslation(language, 'solutionsColumns.installers.feature1')}</span>
                </li>
                <li>
                  <span className="feature-check">✓</span>
                  <span>{getTranslation(language, 'solutionsColumns.installers.feature2')}</span>
                </li>
                <li>
                  <span className="feature-check">✓</span>
                  <span>{getTranslation(language, 'solutionsColumns.installers.feature3')}</span>
                </li>
                <li>
                  <span className="feature-check">✓</span>
                  <span>{getTranslation(language, 'solutionsColumns.installers.feature4')}</span>
                </li>
              </ul>
              <button 
                className="solution-column-btn"
                onClick={() => navigate('/contact')}
              >
                {getTranslation(language, 'solutionsColumns.installers.button')}
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsColumns;
