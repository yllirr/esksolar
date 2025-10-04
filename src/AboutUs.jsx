import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
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

      <section className="about-us">
        <div className="container">
          <div className="about-hero">
            <h1 className="about-title">About SunPulse</h1>
            <p className="about-subtitle">
              Leading the solar energy revolution with innovative solutions and unwavering commitment to sustainability.
            </p>
          </div>

          <div className="about-content">
            <div className="about-story">
              <h2 className="section-title">Our Story</h2>
              <p className="story-text">
                Founded with a vision to make clean energy accessible to everyone, SunPulse has been at the forefront 
                of the solar revolution. We believe that sustainable energy shouldn't be a luxury—it should be a 
                fundamental right for every home and business.
              </p>
              <p className="story-text">
                Since our inception, we've helped over 50,000 customers transition to clean energy, reducing their 
                carbon footprint while saving thousands on their energy bills. Our commitment to quality, innovation, 
                and customer satisfaction has made us a trusted leader in the solar industry.
              </p>
            </div>

            <div className="about-mission">
              <h2 className="section-title">Our Mission</h2>
              <p className="mission-text">
                To accelerate the world's transition to sustainable energy by making solar power more accessible, 
                affordable, and reliable than ever before. We're not just selling solar panels—we're building a 
                cleaner, brighter future for generations to come.
              </p>
            </div>

            <div className="about-values">
              <h2 className="section-title">Our Values</h2>
              <div className="values-grid">
                <div className="value-card">
                  <div className="value-icon">🌱</div>
                  <h3 className="value-title">Sustainability</h3>
                  <p className="value-desc">Every decision we make is guided by our commitment to environmental responsibility.</p>
                </div>
                <div className="value-card">
                  <div className="value-icon">🔬</div>
                  <h3 className="value-title">Innovation</h3>
                  <p className="value-desc">We continuously push the boundaries of solar technology to deliver cutting-edge solutions.</p>
                </div>
                <div className="value-card">
                  <div className="value-icon">🤝</div>
                  <h3 className="value-title">Integrity</h3>
                  <p className="value-desc">We build lasting relationships through transparency, honesty, and exceptional service.</p>
                </div>
                <div className="value-card">
                  <div className="value-icon">📈</div>
                  <h3 className="value-title">Excellence</h3>
                  <p className="value-desc">We strive for the highest standards in everything we do, from installation to ongoing support.</p>
                </div>
              </div>
            </div>

            <div className="about-stats">
              <h2 className="section-title">By the Numbers</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">50,000+</div>
                  <div className="stat-label">Happy Customers</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">2.5M+</div>
                  <div className="stat-label">Panels Installed</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">500MW+</div>
                  <div className="stat-label">Clean Energy Generated</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">25</div>
                  <div className="stat-label">Years of Excellence</div>
                </div>
              </div>
            </div>

            <div className="about-team">
              <h2 className="section-title">Meet Our Team</h2>
              <p className="team-intro">
                Our diverse team of engineers, technicians, and customer service professionals work together 
                to deliver exceptional solar solutions tailored to your unique needs.
              </p>
              <div className="team-highlight">
                <div className="team-card">
                  <div className="team-photo"></div>
                  <h3 className="team-name">Sarah Johnson</h3>
                  <p className="team-role">CEO & Founder</p>
                  <p className="team-bio">
                    With over 20 years in renewable energy, Sarah leads our vision for a sustainable future.
                  </p>
                </div>
                <div className="team-card">
                  <div className="team-photo"></div>
                  <h3 className="team-name">Michael Chen</h3>
                  <p className="team-role">Chief Technology Officer</p>
                  <p className="team-bio">
                    Michael oversees our R&D efforts, ensuring we stay at the forefront of solar innovation.
                  </p>
                </div>
                <div className="team-card">
                  <div className="team-photo"></div>
                  <h3 className="team-name">Emily Rodriguez</h3>
                  <p className="team-role">Head of Customer Success</p>
                  <p className="team-bio">
                    Emily ensures every customer has an exceptional experience from consultation to installation.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-cta">
              <h2 className="cta-title">Ready to Join the Solar Revolution?</h2>
              <p className="cta-text">
                Let us help you make the switch to clean, affordable solar energy.
              </p>
              <button className="cta-button">
                Get Your Free Quote
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

