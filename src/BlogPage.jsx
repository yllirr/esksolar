import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of Solar Energy: Trends to Watch in 2024",
    excerpt: "Discover the latest innovations and trends shaping the solar industry, from advanced battery storage to smart grid integration.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Technology",
    image: "blog-1"
  },
  {
    id: 2,
    title: "How to Maximize Your Solar Panel Efficiency",
    excerpt: "Learn practical tips and strategies to get the most out of your solar panel system and reduce your energy bills.",
    author: "Michael Chen",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Tips & Guides",
    image: "blog-2"
  },
  {
    id: 3,
    title: "Solar Battery Storage: Is It Worth the Investment?",
    excerpt: "Explore the benefits and costs of adding battery storage to your solar system for energy independence.",
    author: "Emily Rodriguez",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Investment",
    image: "blog-3"
  },
  {
    id: 4,
    title: "Understanding Solar Incentives and Tax Credits",
    excerpt: "A comprehensive guide to federal, state, and local incentives that can significantly reduce your solar installation costs.",
    author: "David Thompson",
    date: "February 28, 2024",
    readTime: "8 min read",
    category: "Finance",
    image: "blog-4"
  },
  {
    id: 5,
    title: "Residential vs Commercial Solar: Key Differences",
    excerpt: "Compare residential and commercial solar solutions to understand which approach works best for your needs.",
    author: "Lisa Wang",
    date: "February 20, 2024",
    readTime: "6 min read",
    category: "Comparison",
    image: "blog-5"
  },
  {
    id: 6,
    title: "Solar Panel Maintenance: What You Need to Know",
    excerpt: "Keep your solar system running efficiently with these essential maintenance tips and best practices.",
    author: "James Wilson",
    date: "February 15, 2024",
    readTime: "5 min read",
    category: "Maintenance",
    image: "blog-6"
  }
];

const BlogPage = () => {
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
              <a href="/blog">Blog</a>
              <a href="/about">About Us</a>
            </nav>
            <button className="btn-quote-header">Get a Quote</button>
          </div>
        </div>
      </header>

      <section className="blog-page">
        <div className="container">
          <div className="blog-hero">
            <h1 className="blog-title">Solar Energy Blog</h1>
            <p className="blog-subtitle">
              Stay informed with the latest insights, tips, and trends in solar energy technology.
            </p>
          </div>

          <div className="blog-content">
            <div className="blog-grid">
              {BLOG_POSTS.map((post) => (
                <article key={post.id} className="blog-card">
                  <div className={`blog-image blog-image-${post.image}`}>
                    <div className="blog-category">{post.category}</div>
                  </div>
                  <div className="blog-card-content">
                    <h2 className="blog-card-title">{post.title}</h2>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <div className="blog-meta">
                      <div className="blog-author-info">
                        <span className="blog-author">{post.author}</span>
                        <span className="blog-date">{post.date}</span>
                      </div>
                      <span className="blog-read-time">{post.readTime}</span>
                    </div>
                    <button className="blog-read-more">
                      Read More
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="blog-sidebar">
              <div className="sidebar-section">
                <h3 className="sidebar-title">Popular Categories</h3>
                <div className="category-list">
                  <a href="#" className="category-item">Technology</a>
                  <a href="#" className="category-item">Tips & Guides</a>
                  <a href="#" className="category-item">Investment</a>
                  <a href="#" className="category-item">Finance</a>
                  <a href="#" className="category-item">Maintenance</a>
                </div>
              </div>

              <div className="sidebar-section">
                <h3 className="sidebar-title">Recent Posts</h3>
                <div className="recent-posts">
                  {BLOG_POSTS.slice(0, 3).map((post) => (
                    <div key={`recent-${post.id}`} className="recent-post">
                      <div className={`recent-post-image blog-image-${post.image}`}></div>
                      <div className="recent-post-content">
                        <h4 className="recent-post-title">{post.title}</h4>
                        <span className="recent-post-date">{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-section">
                <h3 className="sidebar-title">Newsletter</h3>
                <div className="newsletter-form">
                  <p className="newsletter-text">
                    Subscribe to get the latest solar energy insights delivered to your inbox.
                  </p>
                  <div className="newsletter-input-group">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="newsletter-input"
                    />
                    <button className="newsletter-button">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
