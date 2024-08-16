import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/Data'; // Import the data
import './Blog.css'; 

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogPosts.find(post => post.id === parseInt(id));

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('Submitting...');
    setTimeout(() => {
      setFormStatus('Thank you for your message!');
      setFormState({
        name: '',
        email: '',
        message: '',
      });
    }, 2000);
  };

  return (
    <div className="blog-detail-container">
      <header className="blog-detail-header">
        <h1 className="blog-detail-title">{blog.title}</h1>
        <p className="blog-detail-date">{blog.date}</p>
      </header>
      <img src={blog.image} alt={blog.title} className="blog-detail-image" />
      <article className="blog-detail-content">
        <p>{blog.content}</p>
      </article>
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to get in touch with us, feel free to reach out using the form below.</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formState.message}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Send Message</button>
          {formStatus && <p className="form-status">{formStatus}</p>}
        </form>
        <div className="contact-info">
          <p>Email: <a href="mailto:info@fashionhub.com">info@fashionhub.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
          <p>Follow us on social media for the latest updates:</p>
          <p>
            <a href="https://www.instagram.com/fashionhub" target="_blank" rel="noopener noreferrer">Instagram</a> |
            <a href="https://www.facebook.com/fashionhub" target="_blank" rel="noopener noreferrer">Facebook</a> |
            <a href="https://www.twitter.com/fashionhub" target="_blank" rel="noopener noreferrer">Twitter</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
