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
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
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
                {p.key === 'single-phase' ? (
                  <img 
                    src="/products/single-phase-inverters/main.png" 
                    alt={p.title}
                    className="product-thumb-image"
                  />
                ) : p.key === 'three-phase' ? (
                  <img 
                    src="/products/three-phase-inverter/thre-phase-main.png" 
                    alt={p.title}
                    className="product-thumb-image"
                  />
                ) : p.key === 'storage-inverter' ? (
                  <img 
                    src="/products/storage-inverter/storage-main.png" 
                    alt={p.title}
                    className="product-thumb-image"
                  />
                ) : p.key === 'retrofit-storage' ? (
                  <img 
                    src="/products/outdoor/outdoor-main.png" 
                    alt={p.title}
                    className="product-thumb-image"
                  />
                ) : p.key === 'lv-batteries' ? (
                  <img 
                    src="/products/lv-batteries/lv-batteries-main.png" 
                    alt={p.title}
                    className="product-thumb-image"
                  />
                ) : p.key === 'hv-batteries' ? (
                  <img 
                    src="/products/hv-batteries/hv-batteries-main.png" 
                    alt={p.title}
                    className="product-thumb-image"
                  />
                ) : p.key === 'e-mobility' ? (
                  <img 
                    src="/products/electric/electric-main.png" 
                    alt={p.title}
                    className="product-thumb-image"
                  />
                ) : p.key === 'monitoring' ? (
                  <img 
                    src="/products/monitoring-systems/monitoring-system-main.png" 
                    alt={p.title}
                    className="product-thumb-image"
                  />
                ) : (
                  <div className="thumb-fallback" />
                )}
              </div>
              <div className="product-info">
                <h3 className="product-name">{p.title}</h3>
                <p className="product-desc">{p.desc}</p>
                <Link 
                  to={
                    p.key === 'single-phase' ? '/products/single-phase-inverters' :
                    p.key === 'three-phase' ? '/products/three-phase-inverters' :
                    p.key === 'storage-inverter' ? '/products/storage-inverters' :
                    p.key === 'retrofit-storage' ? '/products/outdoor-retrofit-storage' :
                    p.key === 'lv-batteries' ? '/products/lv-batteries' :
                    p.key === 'hv-batteries' ? '/products/hv-batteries' :
                    p.key === 'e-mobility' ? '/products/electric-mobility' :
                    p.key === 'monitoring' ? '/products/monitoring-systems' : '#'
                  } 
                  className="product-cta"
                >
                  Learn more <span className="arrow">→</span>
                </Link>
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


