import React, { useState } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import './FashionBlog.css';

const blogPosts = [
  {
    id: 1,
    title: 'Summer Fashion Trends 2024',
    date: 'July 15, 2024',
    image: '../assets/img/blog1.jpg',
    excerpt: 'Discover the latest summer fashion trends for 2024 and learn how to stay stylish under the sun.',
    content: 'The summer of 2024 brings a fresh wave of fashion trends. From vibrant colors to lightweight fabrics, this season is all about staying cool and stylish. Key pieces include flowy dresses, wide-brimmed hats, and chunky sandals. Whether you\'re heading to the beach or a casual brunch, these trends will keep you looking chic and comfortable.',
  },
  {
    id: 2,
    title: 'How to Accessorize Your Outfits',
    date: 'July 22, 2024',
    image: '../assets/img/blog2.webp',
    excerpt: 'From statement necklaces to chic belts, learn how to accessorize your outfits for any occasion.',
    content: 'Accessorizing can transform an ordinary outfit into something extraordinary. Statement necklaces are making a big comeback, along with bold belts that cinch the waist for a flattering silhouette. Pairing accessories with the right outfits can create a polished look for both casual and formal occasions. Don’t be afraid to experiment with different styles!',
  },
  {
    id: 3,
    title: 'Must-Have Pieces for Every Wardrobe',
    date: 'August 5, 2024',
    image: '../assets/img/blog3.webp',
    excerpt: 'Check out the essential pieces every wardrobe needs and how to style them for various looks.',
    content: 'Building a versatile wardrobe requires a few essential pieces. Classic items like a well-fitted blazer, a little black dress, and a pair of tailored pants are must-haves. These pieces can be mixed and matched to create various looks, from professional to casual. Investing in high-quality basics is the key to long-lasting style.',
  },
];

const FashionBlog = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (name && comment) {
      setComments([...comments, { name, comment }]);
      setName(''); // Reset the input field
      setComment(''); // Reset the input field
    }
  };

  if (id) {
    const post = blogPosts.find(post => post.id === parseInt(id));

    if (!post) {
      return <p>Post not found</p>;
    }

    return (
      <div className="blog-post-container">
        <img src={post.image} alt={post.title} className="blog-post-image" />
        <h2 className="blog-post-title">{post.title}</h2>
        <p className="blog-post-date">{post.date}</p>
        <p className="blog-post-content">{post.content}</p>
        <form className="comment-form" onSubmit={handleCommentSubmit}>
          <h3>Share your thoughts</h3>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Write your comment here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>

        <div className="comments-section">
          {comments.map((c, index) => (
            <div key={index} className="comment">
              <p><strong>{c.name}:</strong> {c.comment}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="fashion-blog-container">
      <header className="blog-header">
        <h1 className="blog-title">Fashion Inspiration</h1>
        <p className="blog-subtitle">Your daily dose of style and trends</p>
      </header>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-date">{post.date}</p>
              <p className="blog-excerpt">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="read-more">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FashionBlog;
