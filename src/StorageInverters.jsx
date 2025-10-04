import React from 'react';
import { Link } from 'react-router-dom';
import './StorageInverters.css';

const StorageInverters = () => {
  const STORAGE_PRODUCTS = [
    {
      id: 1,
      name: "Storage Inverter",
      model: "3PH HYD 5000 ZP3/ 3PH HYD 12000 ZP3",
      image: "3PH HYD 5000 ZP3: 3PH HYD 12000 ZP3.png"
    },
    {
      id: 2,
      name: "Storage Inverter",
      model: "1PH BZT5000",
      image: "1PH BZT5000.png"
    },
    {
      id: 3,
      name: "Storage Inverter",
      model: "EASY POWER - One And All",
      image: "EASY POWER – One And All.png"
    },
    {
      id: 4,
      name: "Storage Inverter",
      model: "HYD 10000 ZSS/HYD 20000 ZSS - Three-Phase Hybrid",
      image: "HYD 3000-ZSS HP:HYD 6000-ZSS HP - Single-Phase Hybrid.png"
    },
    {
      id: 5,
      name: "Storage Inverter",
      model: "HYD 5000 ZSS/HYD 8000 ZSS - Three-Phase Hybrid",
      image: "HYD 3000-ZSS:HYD 6000-ZSS - Single-Phase Hybrid.png"
    },
    {
      id: 6,
      name: "Storage Inverter",
      model: "HYD 3000-ZSS HP/HYD 6000-ZSS HP - Single-Phase Hybrid",
      image: "HYD 3000-ZSS HP:HYD 6000-ZSS HP - Single-Phase Hybrid.png"
    },
    {
      id: 7,
      name: "Storage Inverter",
      model: "HYD 3000-ZSS/HYD 6000-ZSS - Single-Phase Hybrid",
      image: "HYD 3000-ZSS:HYD 6000-ZSS - Single-Phase Hybrid.png"
    },
    {
      id: 8,
      name: "Storage Inverter",
      model: "3000SP - Retrofit",
      image: "3000SP - Retrofit.png"
    }
  ];

  return (
    <div className="storage-inverters-page">
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
          <span className="current">STORAGE INVERTER</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="container">
        <div className="page-header">
          <div className="page-title-section">
            <h1 className="page-title">Storage Inverter</h1>
            <p className="page-description">
              ZCS Azzurro Storage Inverters are ideal for optimizing energy independence in residential and commercial buildings. 
              Easy installation and automatic configuration make them perfect for both retrofit and hybrid applications.
            </p>
            <p className="page-description">
              Our storage inverters offer nominal power from 3 kW to 20 kW and storage capacity up to 25 kWh, 
              with the ability to operate in stand-alone mode for power continuity during blackouts.
            </p>
          </div>
          <div className="page-image">
            <img src="/foto/storage-main.png" alt="Storage Inverter" />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {STORAGE_PRODUCTS.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img 
                    src={`/products/storage-inverter/${product.image}`} 
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

export default StorageInverters;
