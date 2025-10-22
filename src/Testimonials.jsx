import React from 'react';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './Testimonials.css';

const Testimonials = () => {
  const { language } = useLanguage();
  
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonial-image">
          <img src="/foto/happy-family-with-dog-moving-new-home.jpg" alt="Happy Family" className="testimonial-img" />
        </div>
        
        <div className="testimonial-content">
          <div className="testimonial-quote">
            <div className="quote-marks">"</div>
            <div className="stars">★★★★★</div>
            <p className="testimonial-text" dangerouslySetInnerHTML={{ __html: getTranslation(language, 'testimonials.text') }} />
            <div className="testimonial-author">{getTranslation(language, 'testimonials.author')}</div>
            <div className="testimonial-stats">{getTranslation(language, 'testimonials.stats')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
