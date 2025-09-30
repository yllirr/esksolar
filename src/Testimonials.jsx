import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
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
            <p className="testimonial-text">
              It's convenient, we don't have to<br />
              worry about it. SunPulse<br />
              monitors it for us. If anything<br />
              happens they will come out and<br />
              fix it so we like that part.
            </p>
            <div className="testimonial-author">Haley - Litchfield Park, AZ</div>
            <div className="testimonial-stats">00,000 homes and counting</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
