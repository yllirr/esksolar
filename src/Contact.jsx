import React from 'react';
import Header from './Header';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './Contact.css';

const Contact = () => {
  const { language } = useLanguage();
  
  return (
    <>
      <Header />

      <section className="contact-page">
        <div className="container">
          <div className="contact-header">
            <h1 className="contact-title">{getTranslation(language, 'contact.title')}</h1>
            <p className="contact-subtitle">{getTranslation(language, 'contact.subtitle')}</p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <h2>{language === 'sq' ? 'Na Kontaktoni' : 'Get in Touch'}</h2>
              <p>
                {language === 'sq' 
                  ? 'Gati të bëni kalimin në energji diellore? Kontaktoni ekipin tonë të ekspertëve për një konsultim të personalizuar.'
                  : 'Ready to make the switch to solar energy? Contact our team of experts for a personalized consultation.'
                }
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <h3>{getTranslation(language, 'contact.phone')}</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
                
                <div className="contact-item">
                  <h3>{getTranslation(language, 'contact.email')}</h3>
                  <p>info@sunpulse.com</p>
                </div>
                
                <div className="contact-item">
                  <h3>{getTranslation(language, 'contact.address')}</h3>
                  <p>123 Solar Street<br />Green City, GC 12345</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2>{language === 'sq' ? 'Dërgoni një Mesazh' : 'Send us a Message'}</h2>
              <form>
                <div className="form-group">
                  <input type="text" placeholder={getTranslation(language, 'contact.name')} className="form-input" />
                </div>
                
                <div className="form-group">
                  <input type="email" placeholder={getTranslation(language, 'contact.email')} className="form-input" />
                </div>
                
                <div className="form-group">
                  <input type="text" placeholder={getTranslation(language, 'contact.subject')} className="form-input" />
                </div>
                
                <div className="form-group">
                  <textarea placeholder={getTranslation(language, 'contact.message')} className="form-textarea" rows="5"></textarea>
                </div>
                
                <button type="submit" className="form-submit">{getTranslation(language, 'contact.submit')}</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
