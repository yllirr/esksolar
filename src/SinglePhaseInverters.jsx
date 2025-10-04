import React from 'react';
import { Link } from 'react-router-dom';
import './SinglePhaseInverters.css';

const SINGLE_PHASE_PRODUCTS = [
  {
    id: 1,
    name: "Single-phase Inverter",
    model: "1PH 3000TLM-V3/1PH 6000TLM-V3",
    description: "Available in sizes from 3 to 6kw, they are small, easy to manage, easy to install and are all equipped with Wi-Fi connectivity for remote monitoring.",
    image: "1PH 6000TLM-V3.png",
    idealFor: ["residential", "commercial"],
    endOfLife: false,
  },
  {
    id: 2,
    name: "Single-phase Inverter",
    model: "Single-phase Inverter 1100TL-V1/3000TL-V1 - Plus Series",
    image: "Single-phase Inverter 1100TL-V1:3000TL-V1 - Plus Series.png",
    endOfLife: true,
  },
  {
    id: 3,
    name: "Single-phase Inverter",
    model: "Single-phase String Inverter 1PH 3000TLM-V1/1PH 6000TLM-V1 - Plus Series",
    image: "Single-phase String Inverter 1PH 3000TLM-V1:1PH 6000TLM-V1 - Plus Series.png",
    endOfLife: true
  },
  {
    id: 4,
    name: "Single-phase Inverter",
    model: "Single-phase inverter 1PH 3000TLM-V2/1PH 6000TLM-V2 - Lite Series",
    image: "ZCS-AZZURRO-INVERTER-DI-STRINGA-MONOFASE-1PH-3000TLM-V2-1PH-6000TLM-V2-EndOfLife.png",
    endOfLife: true,
  },
  {
    id: 5,
    name: "Single-phase Inverter",
    model: "1PH 1100TL-V3/1PH 3300TL-V3",
    description: "The ZCS Azzurro Single-phase inverters of the TL series are the ideal solution for small photovoltaic systems in residential or commercial buildings.",
    image: "1PH 3300TL-V3.png",
    idealFor: ["residential"],
    endOfLife: false,
  }
];

const SinglePhaseInverters = () => {
  return (
    <>
      {/* Header Navigation */}
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="logo">SunPulse</Link>
            <nav className="nav-menu">
              <Link to="/products">Products</Link>
              <a href="#pricing">Plans & Pricing</a>
              <Link to="/blog">Blog</Link>
              <Link to="/about">About Us</Link>
            </nav>
            <button className="btn-quote-header">Get a Quote</button>
          </div>
        </div>
      </header>

      <section className="single-phase-page">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="breadcrumb">
            <Link to="/">HOME</Link>
            <span className="breadcrumb-separator">></span>
            <Link to="/products">INVERTERS</Link>
            <span className="breadcrumb-separator">></span>
            <span className="breadcrumb-current">SINGLE-PHASE INVERTER</span>
          </nav>

          {/* Page Header */}
          <div className="page-header">
            <div className="page-title-section">
              <h1 className="page-title">Single-phase Inverter</h1>
              <p className="page-description">
                The ZCS Azzurro single-phase inverters are the ideal solution for small photovoltaic systems in residential or commercial buildings. Available in sizes from 1 to 6 Kw, they are small, easy to manage and easy to install.
              </p>
              <p className="page-description">
                The wide range of input makes them easy to configure and suitable for any type of need, both for new installations and for retrofitting existing ones.
              </p>
              <p className="page-description">
                The graphic or alphanumeric display (depending on the model) allows you to consult the inverter data, while Wi-Fi connectivity allows remote monitoring anytime and anywhere.
              </p>
            </div>
            <div className="page-image">
              <img src="/products/single-phase-inverters/main.png" alt="Single-phase Inverter" />
              <div className="virtual-guide-box">
                <div className="virtual-guide-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Virtual Installation Guide</span>
              </div>
            </div>
          </div>

          {/* Category Actions */}
          <div className="category-actions">
            <div className="ideal-for-section">
              <span className="ideal-for-label">IDEAL FOR</span>
              <div className="ideal-for-icons">
                <div className="ideal-for-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ideal-for-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 21V7L13 2L21 7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 13H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="action-buttons">
              <button className="btn-find-out-more">FIND OUT MORE</button>
              <button className="btn-documentation">DOCUMENTATION</button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {SINGLE_PHASE_PRODUCTS.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img 
                    src={`/products/single-phase-inverters/${product.image}`} 
                    alt={product.name}
                    className="product-image"
                  />
                  {product.endOfLife && (
                    <div className="end-of-life-badge">
                      <div className="badge-icon">A</div>
                      <span className="badge-text">END OF LIFE</span>
                    </div>
                  )}
                </div>
                
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-model">{product.model}</p>
                  
                  {product.description && (
                    <p className="product-description">{product.description}</p>
                  )}
                  
                  {product.idealFor && (
                    <div className="product-ideal-for">
                      <span className="ideal-for-label">IDEAL FOR</span>
                      <div className="ideal-for-icons">
                        {product.idealFor.map((type, index) => (
                          <div key={index} className="ideal-for-icon">
                            {type === 'residential' ? (
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            ) : (
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5 21V7L13 2L21 7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9 9H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9 13H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="product-actions">
                    {!product.endOfLife && (
                      <button className="btn-find-out-more">FIND OUT MORE</button>
                    )}
                    <button className="btn-documentation">DOCUMENTATION</button>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePhaseInverters;
