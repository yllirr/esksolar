import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './FAQQuote.css';

const FAQQuote = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const { language } = useLanguage();

  const faqData = getTranslation(language, 'faq.questions');

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section className="faq-quote">
      <div className="faq-quote-container">
        {/* FAQ Section */}
        <div className="faq-section">
          <div className="faq-content">
            <h2 className="faq-title">{getTranslation(language, 'faq.title')}</h2>
            <div className="faq-cta">
              <p className="faq-cta-text">{getTranslation(language, 'faq.subtitle')}</p>
              <button className="faq-cta-btn">
                {getTranslation(language, 'common.readMore')}
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
          
          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${expandedFAQ === index ? 'expanded' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question-wrapper">
                  <span className="faq-question">{faq.question}</span>
                  <span className="faq-arrow">{expandedFAQ === index ? '−' : '+'}</span>
                </div>
                {expandedFAQ === index && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quote Form Section */}
        <div className="quote-section">
          <div className="quote-form">
            <h2 className="quote-title">{getTranslation(language, 'quote.title')}</h2>
            
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder={getTranslation(language, 'quote.firstName')} className="form-input" />
              </div>
              <div className="form-group">
                <input type="text" placeholder={getTranslation(language, 'quote.lastName')} className="form-input" />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder={getTranslation(language, 'quote.zipCode')} className="form-input" />
              </div>
              <div className="form-group">
                <input type="tel" placeholder={getTranslation(language, 'quote.phoneNumber')} className="form-input" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">{getTranslation(language, 'quote.homeOwnership')}</label>
              <div className="radio-group">
                <label className="radio-item">
                  <input type="radio" name="homeownership" value="yes" defaultChecked />
                  <span className="radio-text">{getTranslation(language, 'quote.yes')}</span>
                </label>
                <label className="radio-item">
                  <input type="radio" name="homeownership" value="no" />
                  <span className="radio-text">{getTranslation(language, 'quote.no')}</span>
                </label>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="terms-link">{getTranslation(language, 'quote.termsOfService')}</a>
              </div>
            </div>

            <div className="consent-text">
              {getTranslation(language, 'quote.consent')}
            </div>

            <button className="quote-submit-btn">
              {getTranslation(language, 'quote.submit')}
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQQuote;
