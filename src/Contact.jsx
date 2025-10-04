import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <>
      {/* Header Navigation */}
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="logo">SunPulse</Link>
            <nav className="nav-menu">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
            </nav>
            <button className="btn-quote-header">Get a Quote</button>
          </div>
        </div>
      </header>

      <section className="contact-page">
        <div className="container">
          <div className="contact-header">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-subtitle">Get in touch with our solar energy experts</p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>Ready to make the switch to solar energy? Contact our team of experts for a personalized consultation.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
                
                <div className="contact-item">
                  <h3>Email</h3>
                  <p>info@sunpulse.com</p>
                </div>
                
                <div className="contact-item">
                  <h3>Address</h3>
                  <p>123 Solar Street<br />Green City, GC 12345</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2>Send us a Message</h2>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" className="form-input" />
                </div>
                
                <div className="form-group">
                  <input type="email" placeholder="Your Email" className="form-input" />
                </div>
                
                <div className="form-group">
                  <input type="text" placeholder="Subject" className="form-input" />
                </div>
                
                <div className="form-group">
                  <textarea placeholder="Your Message" className="form-textarea" rows="5"></textarea>
                </div>
                
                <button type="submit" className="form-submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
