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
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
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
                </div>
                
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-model">{product.model}</p>
                  
                  
                  
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
