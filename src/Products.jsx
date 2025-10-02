import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const PRODUCTS = [
  { key: 'single-phase', title: 'Single-phase Inverter', desc: 'High-efficiency residential inverters for small to medium systems.' },
  { key: 'three-phase', title: 'Three-phase Inverter', desc: 'Reliable power conversion for larger residential and commercial arrays.' },
  { key: 'storage-inverter', title: 'Storage Inverter', desc: 'Hybrid solutions enabling PV + battery integration and optimized self-consumption.' },
  { key: 'retrofit-storage', title: 'Outdoor retrofit storage system', desc: 'Add batteries to existing PV systems without replacing the inverter.' },
  { key: 'lv-batteries', title: 'LV Batteries', desc: 'Low-voltage lithium modules with scalable capacity and smart BMS.' },
  { key: 'hv-batteries', title: 'HV Batteries', desc: 'High-voltage battery stacks designed for higher efficiency and faster charge.' },
  { key: 'e-mobility', title: 'Electric Mobility', desc: 'EV charging and accessories to power clean transportation.' },
  { key: 'monitoring', title: 'Monitoring Systems', desc: 'Cloud-connected monitoring, apps and gateways for full visibility.' },
];

const Products = () => {
  return (
    <>
      {/* Header Navigation */}
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="logo">SunPulse</Link>
            <nav className="nav-menu">
              <a href="/products">Products</a>
              <a href="#pricing">Plans & Pricing</a>
              <a href="#learn">Learn</a>
              <a href="#company">Company</a>
            </nav>
            <button className="btn-quote-header">Get a Quote</button>
          </div>
        </div>
      </header>

      <section id="products" className="products">
      <div className="products-container">
        <header className="products-header">
          <h2 className="products-title">Products</h2>
          <p className="products-subtitle">Discover our full range of solar and storage solutions</p>
        </header>

        <div className="products-grid">
          {PRODUCTS.map((p) => (
            <article key={p.key} className="product-card">
              <div className={`product-thumb thumb-${p.key}`} aria-hidden>
                <div className="thumb-fallback" />
              </div>
              <div className="product-info">
                <h3 className="product-name">{p.title}</h3>
                <p className="product-desc">{p.desc}</p>
                <button className="product-cta">
                  Learn more <span className="arrow">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Products;


