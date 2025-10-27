import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Header from './Header';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './Contact.css';

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

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
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'your-email@example.com' // Replace with your email
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',      // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',     // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY'        // Replace with your EmailJS public key
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };
  
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
                  <p>+383 44 123 456</p>
                </div>
                
                <div className="contact-item">
                  <h3>{getTranslation(language, 'contact.email')}</h3>
                  <p>info@esksolar.com</p>
                </div>
                
                <div className="contact-item">
                  <h3>{getTranslation(language, 'contact.address')}</h3>
                  <p>Suharekë, Kosovë</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2>{language === 'sq' ? 'Dërgoni një Mesazh' : 'Send us a Message'}</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={getTranslation(language, 'contact.name')} 
                    className="form-input" 
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={getTranslation(language, 'contact.email')} 
                    className="form-input" 
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={getTranslation(language, 'contact.subject')} 
                    className="form-input" 
                    required
                  />
                </div>
                
                <div className="form-group">
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={getTranslation(language, 'contact.message')} 
                    className="form-textarea" 
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                {status && (
                  <div className={`form-status ${status}`}>
                    {status === 'sending' && (language === 'sq' ? 'Duke dërguar...' : 'Sending...')}
                    {status === 'success' && (language === 'sq' ? 'Mesazhi u dërgua me sukses!' : 'Message sent successfully!')}
                    {status === 'error' && (language === 'sq' ? 'Gabim! Ju lutem provoni përsëri.' : 'Error! Please try again.')}
                  </div>
                )}
                
                <button type="submit" className="form-submit" disabled={status === 'sending'}>
                  {status === 'sending' 
                    ? (language === 'sq' ? 'Duke dërguar...' : 'Sending...')
                    : getTranslation(language, 'contact.submit')
                  }
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
