import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const BusinessProducts = () => {
  // 5 produkte për biznes (random nga lista)
  const BUSINESS_PRODUCTS = [
    { 
      key: 'three-phase', 
      title: 'Three-phase Inverter', 
      desc: 'Reliable power conversion for larger residential and commercial arrays.',
      image: '/products/three-phase-inverter/thre-phase-main.png',
      link: '/products/three-phase-inverters'
    },
    { 
      key: 'retrofit-storage', 
      title: 'Outdoor retrofit storage system', 
      desc: 'Add batteries to existing PV systems without replacing the inverter.',
      image: '/products/outdoor/outdoor-main.png',
      link: '/products/outdoor-retrofit-storage'
    },
    { 
      key: 'storage-inverter', 
      title: 'Storage Inverter', 
      desc: 'Hybrid solutions enabling PV + battery integration and optimized self-consumption.',
      image: '/products/storage-inverter/storage-main.png',
      link: '/products/storage-inverters'
    },
    { 
      key: 'e-mobility', 
      title: 'Electric Mobility', 
      desc: 'EV charging and accessories to power clean transportation.',
      image: '/products/electric/electric-main.png',
      link: '/products/electric-mobility'
    },
    { 
      key: 'monitoring', 
      title: 'Monitoring Systems', 
      desc: 'Cloud-connected monitoring, apps and gateways for full visibility.',
      image: '/products/monitoring-systems/monitoring-system-main.png',
      link: '/products/monitoring-systems'
    }
  ];

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
            <h2 className="products-title">Business Products</h2>
            <p className="products-subtitle">Solar solutions designed for commercial and industrial applications</p>
            
            {/* Category Tabs */}
            <div className="category-tabs">
              <Link to="/products/home" className="category-tab">Home Products</Link>
              <Link to="/products/business" className="category-tab active">Business Products</Link>
            </div>
          </header>

          <div className="products-grid">
            {BUSINESS_PRODUCTS.map((p) => (
              <article key={p.key} className="product-card">
                <div className={`product-thumb thumb-${p.key}`} aria-hidden>
                  <img 
                    src={p.image} 
                    alt={p.title}
                    className="product-thumb-image"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{p.title}</h3>
                  <p className="product-desc">{p.desc}</p>
                  <Link to={p.link} className="product-cta">
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

export default BusinessProducts;
