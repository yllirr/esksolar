import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './FAQQuote.css';

const FAQQuote = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    zipCode: '',
    phoneNumber: '',
    homeOwnership: 'yes'
  });
  const [status, setStatus] = useState('');
  const { language } = useLanguage();
  const navigate = useNavigate();

  const faqData = getTranslation(language, 'faq.questions');

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const templateParams = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        zip_code: formData.zipCode,
        phone_number: formData.phoneNumber,
        home_ownership: formData.homeOwnership,
        to_email: 'your-email@example.com' // Replace with your email
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',      // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',     // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY'        // Replace with your EmailJS public key
      );

      setStatus('success');
      setFormData({ firstName: '', lastName: '', zipCode: '', phoneNumber: '', homeOwnership: 'yes' });
      
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
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
              <button className="faq-cta-btn" onClick={() => navigate('/blog')}>
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
            
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder={getTranslation(language, 'quote.firstName')} 
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder={getTranslation(language, 'quote.lastName')} 
                    className="form-input"
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder={getTranslation(language, 'quote.zipCode')} 
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="tel" 
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder={getTranslation(language, 'quote.phoneNumber')} 
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">{getTranslation(language, 'quote.homeOwnership')}</label>
                <div className="radio-group">
                  <label className="radio-item">
                    <input 
                      type="radio" 
                      name="homeOwnership" 
                      value="yes" 
                      checked={formData.homeOwnership === 'yes'}
                      onChange={handleChange}
                    />
                    <span className="radio-text">{getTranslation(language, 'quote.yes')}</span>
                  </label>
                  <label className="radio-item">
                    <input 
                      type="radio" 
                      name="homeOwnership" 
                      value="no" 
                      checked={formData.homeOwnership === 'no'}
                      onChange={handleChange}
                    />
                    <span className="radio-text">{getTranslation(language, 'quote.no')}</span>
                  </label>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="terms-link">{getTranslation(language, 'quote.termsOfService')}</a>
                </div>
              </div>

              <div className="consent-text">
                {getTranslation(language, 'quote.consent')}
              </div>

              {status && (
                <div className={`form-status ${status}`}>
                  {status === 'sending' && (language === 'sq' ? 'Duke dërguar...' : 'Sending...')}
                  {status === 'success' && (language === 'sq' ? 'Kërkesa u dërgua me sukses!' : 'Request sent successfully!')}
                  {status === 'error' && (language === 'sq' ? 'Gabim! Ju lutem provoni përsëri.' : 'Error! Please try again.')}
                </div>
              )}

              <button type="submit" className="quote-submit-btn" disabled={status === 'sending'}>
                {status === 'sending' 
                  ? (language === 'sq' ? 'Duke dërguar...' : 'Sending...')
                  : getTranslation(language, 'quote.submit')
                }
                <span className="btn-arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQQuote;
