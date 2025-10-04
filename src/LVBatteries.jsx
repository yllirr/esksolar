import React from 'react';
import { Link } from 'react-router-dom';
import './LVBatteries.css';

const LVBatteries = () => {
  const LV_PRODUCTS = [
    {
      id: 1,
      name: "LV Batteries",
      model: "LV Pylontec",
      image: "LV Pylontec.png"
    },
    {
      id: 2,
      name: "LV Batteries",
      model: "LV Weco",
      image: "LV Weco.png"
    },
    {
      id: 3,
      name: "LV Batteries",
      model: "LV ZSX Azzurro",
      image: "LV ZSX Azzurro.png"
    }
  ];

  return (
    <div className="lv-batteries-page">
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
          <span className="current">LV BATTERIES</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="container">
        <div className="page-header">
          <div className="page-title-section">
            <h1 className="page-title">LV Batteries</h1>
            <p className="page-description">
              Low-voltage lithium modules with scalable capacity and smart BMS. 
              Our LV battery systems provide reliable energy storage solutions for residential and commercial applications.
            </p>
            <p className="page-description">
              Featuring advanced battery management systems, these modules offer excellent performance, 
              long cycle life, and easy installation for optimal energy independence.
            </p>
          </div>
          <div className="page-image">
            <img src="/foto/lv-batteries-main.png" alt="LV Batteries" />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {LV_PRODUCTS.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img 
                    src={`/products/lv-batteries/${product.image}`} 
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

export default LVBatteries;
