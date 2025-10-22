import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const blogPosts = getTranslation(language, 'blog.posts');
  
  // Find the current post
  const post = blogPosts.find(p => p.id === parseInt(id));
  
  if (!post) {
    return (
      <>
        <Header />
        <div className="blog-post-content">
          <div className="post-not-found">
            <h1>Post not found</h1>
            <Link to="/blog" className="back-to-blog">Back to Blog</Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <Link to="/">{getTranslation(language, 'nav.home')}</Link>
          <span className="separator">></span>
          <Link to="/blog">{getTranslation(language, 'nav.blog')}</Link>
          <span className="separator">></span>
          <span className="current">{post.title}</span>
        </div>
      </div>

      {/* Blog Post Content */}
      <article className="blog-post-content">
        <div className="container">
          <div className="post-header">
            <div className="post-category">{post.category}</div>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-excerpt">{post.excerpt}</p>
            <div className="post-meta">
              <span className="post-author">By {post.author}</span>
              <span className="post-date">{post.date}</span>
              <span className="post-read-time">{post.readTime}</span>
            </div>
          </div>

          <div className="post-image">
            <img src={`${process.env.PUBLIC_URL}/foto/blog/${post.image}`} alt={post.title} />
          </div>

          <div className="post-body">
            <div dangerouslySetInnerHTML={{ __html: post.content || '<p>Content not available</p>' }} />
          </div>

          <div className="post-tags">
            <h4>{getTranslation(language, 'blog.tags')}:</h4>
            <div className="tags-list">
              {post.tags && post.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="post-navigation">
            <Link to="/blog" className="back-to-blog">
              ← {getTranslation(language, 'blog.backToBlog')}
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;