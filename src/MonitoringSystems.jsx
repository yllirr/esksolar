import React from 'react';
import { Link } from 'react-router-dom';
import './MonitoringSystems.css';

const MonitoringSystems = () => {
  const MONITORING_PRODUCTS = [
    {
      id: 1,
      name: "Monitoring Systems",
      model: "Azzurro Hub",
      image: "Azzurro Hub.png"
    },
    {
      id: 2,
      name: "Monitoring Systems",
      model: "ZCS COMBOX",
      image: "zcs-combox.png"
    },
    {
      id: 3,
      name: "Monitoring Systems",
      model: "Plants monitoring systems",
      image: "Plants monitoring systems.png"
    },
    {
      id: 4,
      name: "Monitoring Systems",
      model: "ZCS Connext",
      image: "ZCS-connext.png"
    }
  ];

  return (
    <div className="monitoring-systems-page">
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
          <span className="current">MONITORING SYSTEMS</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="container">
        <div className="page-header">
          <div className="page-title-section">
            <h1 className="page-title">Monitoring Systems</h1>
            <p className="page-description">
              The ZCS Azzurro monitoring systems are the ideal solution for the complete control and visibility 
              of all the important parameters for plants of all types.
            </p>
          </div>
          <div className="page-image">
            <img src="/foto/monitoring-system-main.png" alt="Monitoring Systems" />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {MONITORING_PRODUCTS.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img 
                    src={`/products/monitoring-systems/${product.image}`} 
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

export default MonitoringSystems;
