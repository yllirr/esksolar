import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './BlogPage.css';

const BlogPage = () => {
  const { language } = useLanguage();
  const blogPosts = getTranslation(language, 'blog.posts');
  
  return (
    <>
      <Header />

      <section className="blog-page">
        <div className="container">
          <div className="blog-hero">
            <h1 className="blog-title">{getTranslation(language, 'blog.title')}</h1>
            <p className="blog-subtitle">
              {getTranslation(language, 'blog.subtitle')}
            </p>
          </div>

          <div className="blog-content">
            <div className="blog-grid">
              {blogPosts.map((post) => (
                <article key={post.id} className="blog-card">
                  <div className="blog-image">
                    <img src={`/foto/blog/${post.image}`} alt={post.title} />
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
                    <Link to={`/blog/${post.id}`} className="blog-read-more">
                      {getTranslation(language, 'blog.readMore')}
                      <span className="btn-arrow">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;

