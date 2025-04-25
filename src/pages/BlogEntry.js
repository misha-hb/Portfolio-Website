import React from 'react';
import '../styles/BlogEntry.css';

const BlogEntry = ({ blog, onBack }) => {
  return (
    <div className="blog-entry-section">
      <h1 className="blog-entry-title">{blog.title}</h1>
      <p className="blog-entry-timestamp">{blog.timestamp}</p>
      <div className="blog-entry-content">
        {blog.content}
      </div>
      <span onClick={onBack} className="fixed-back-link">Back</span>

    </div>
  );
};

export default BlogEntry;