import React from 'react';
import { Link } from 'react-router-dom';
import './OutdoorRetrofitStorage.css';

const OutdoorRetrofitStorage = () => {
  const OUTDOOR_PRODUCTS = [
    {
      id: 1,
      name: "Outdoor retrofit storage system",
      model: "POWER MAGIC",
      image: "POWER MAGIC.png"
    }
  ];

  return (
    <div className="outdoor-retrofit-page">
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
          <span className="current">OUTDOOR RETROFIT STORAGE SYSTEM</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="container">
        <div className="page-header">
          <div className="page-title-section">
            <h1 className="page-title">Outdoor retrofit storage system</h1>
            <p className="page-description">
              The new outdoor retrofit storage system, is ideal for large power industrial installations. 
              The system is modulated according to the customer's needs and is available with power from 1.25 to 750 kW 
              and capacity from 250 kWh to 1.5 MWh.
            </p>
            <p className="page-description">
              The system is equipped with a fire-fighting system with integrated sensors and monitoring as well as liquid-cooled. 
              Installation is simple, thanks to the Plug & Play mode.
            </p>
          </div>
          <div className="page-image">
            <img src="/foto/outdoor-main.png" alt="Outdoor Retrofit Storage System" />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {OUTDOOR_PRODUCTS.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img 
                    src={`/products/outdoor/${product.image}`} 
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

export default OutdoorRetrofitStorage;
