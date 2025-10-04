import React from 'react';
import { Link } from 'react-router-dom';
import './ElectricMobility.css';

const ElectricMobility = () => {
  const ELECTRIC_PRODUCTS = [
    {
      id: 1,
      name: "Electric Mobility",
      model: "Wallbox CARO Serie Home",
      image: "Electric Vehicle Charging Stations.png"
    },
    {
      id: 2,
      name: "Electric Mobility",
      model: "Electric Vehicle Charging Stations",
      image: "Electric Vehicle Charging Stations 2.png"
    },
    {
      id: 3,
      name: "Electric Mobility",
      model: "Ev Charger 60kW",
      image: "Ev Charger 60kW.png"
    },
    {
      id: 4,
      name: "Electric Mobility",
      model: "Monitoraggio Stazioni di Ricarica",
      image: "Monitoraggio Stazioni di Ricarica.png"
    }
  ];

  return (
    <div className="electric-mobility-page">
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
          <span className="current">ELECTRIC MOBILITY</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="container">
        <div className="page-header">
          <div className="page-title-section">
            <h1 className="page-title">Electric Mobility</h1>
            <p className="page-description">
              The Zucchetti Centro Sistemi (ZCS) chargers are available in two models with power capacities of 7kW and 22kW, 
              single and three-phase, smart and connectable to any existing photovoltaic system, as well as the ZCS Azzurro 
              production and storage inverters.
            </p>
          </div>
          <div className="page-image">
            <img src="/foto/electric-main.png" alt="Electric Mobility" />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {ELECTRIC_PRODUCTS.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img 
                    src={`/products/electric/${product.image}`} 
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

export default ElectricMobility;
