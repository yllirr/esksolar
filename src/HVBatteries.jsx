import React from 'react';
import { Link } from 'react-router-dom';
import './HVBatteries.css';

const HVBatteries = () => {
  const HV_PRODUCTS = [
    {
      id: 1,
      name: "HV Batteries",
      model: "HV Pylontec",
      image: "HV Pylontec.png"
    },
    {
      id: 2,
      name: "HV Batteries",
      model: "HV ZBT 5K",
      image: "HV ZBT 5K.png"
    },
    {
      id: 3,
      name: "HV Batteries",
      model: "ZCS AZZURRO HV SMART 5K",
      image: "ZCS AZZURRO HV SMART 5K.png"
    }
  ];

  return (
    <div className="hv-batteries-page">
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

      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <Link to="/">HOME</Link>
          <span className="separator">></span>
          <Link to="/products">PRODUCTS</Link>
          <span className="separator">></span>
          <span className="current">HV BATTERIES</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="container">
        <div className="page-header">
          <div className="page-title-section">
            <h1 className="page-title">HV Batteries</h1>
            <p className="page-description">
              The high voltage batteries for ZCS Azzurro three-phase hybrid inverters and storage systems are the best solution for optimising energy independence in residential applications.
            </p>
            <p className="page-description">
              Capable of being installed in series up to a capacity of 60kWh, they are ideal for storage installations with ZCS Azzurro inverters. They configure themselves automatically, so there is no need for manual settings.
            </p>
            <p className="page-description">
              The Lithium Ion or Lithium-Iron-Phosphate technology allows efficient use even at high depths of discharge by optimising energy storage and reuse. Easy installation and long service life make these batteries highly efficient and practical.
            </p>
          </div>
          <div className="page-image">
            <img src="/foto/hv-batteries-main.png" alt="HV Batteries" />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {HV_PRODUCTS.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img 
                    src={`/products/hv-batteries/${product.image}`} 
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
    </div>
  );
};

export default HVBatteries;
