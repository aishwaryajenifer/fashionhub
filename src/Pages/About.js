import React from 'react';

import './About.css'; 

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section welcome-section">
        <h1>Welcome to FashionHub!</h1>
        <p>
          At FashionHub, we believe in the power of fashion to express individuality and confidence. Our mission is to bring you the latest trends and timeless styles, ensuring that you feel your best every day.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/img/about6.jpg`}  alt="FashionHub Welcome" className="about-image" />
      </section>

      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Founded in 2015, FashionHub started as a small boutique with a passion for fashion and a commitment to quality. Over the years, we have grown into a beloved brand known for our curated collections and exceptional customer service. Our journey began with a dream to make high-quality fashion accessible to everyone, and today, we are proud to serve a diverse community of fashion enthusiasts.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/img/about3.jpg`} alt="Our Story" className="about-image" />
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to inspire confidence and self-expression through fashion. We strive to offer a wide variety of clothing and accessories that cater to all styles and preferences, ensuring that you can find something that truly reflects your unique personality. From everyday basics to statement pieces, we are dedicated to helping you build a wardrobe that you love.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/img/about2.jpg`} alt="Our Mission" className="about-image" />
      </section>

      <section className="about-section">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Customer Satisfaction:</strong> Your happiness is our top priority. We are committed to providing excellent service and high-quality products that exceed your expectations.</li>
          <li><strong>Quality and Craftsmanship:</strong> We believe in the importance of quality and craftsmanship. Every piece in our collection is carefully selected and crafted to ensure it meets our high standards.</li>
          <li><strong>Inclusivity:</strong> Fashion is for everyone. We celebrate diversity and strive to create inclusive collections that cater to all body types and styles.</li>
          <li><strong>Sustainability:</strong> We are dedicated to making fashion more sustainable. We continuously seek out eco-friendly materials and practices to minimize our environmental impact.</li>
        </ul>
        <img src={`${process.env.PUBLIC_URL}/assets/img/about4.jpg`} alt="Our Values" className="about-image" />
      </section>

      <section className="about-section">
        <h2>Why Shop With Us?</h2>
        <ul>
          <li><strong>Curated Collections:</strong> Discover the latest trends and timeless classics in our carefully curated collections.</li>
          <li><strong>Exceptional Quality:</strong> We source our products from trusted manufacturers to ensure the highest quality and durability.</li>
          <li><strong>Fast and Reliable Shipping:</strong> Enjoy quick and reliable delivery on all your orders.</li>
          <li><strong>Secure Shopping:</strong> Shop with confidence, knowing that your personal information is protected.</li>
        </ul>
        <img src={`${process.env.PUBLIC_URL}/assets/img/about5.jpg`} alt="Why Shop With Us?" className="about-image" />
      </section>

      <section className="about-section">
        <h2>Meet the Team</h2>
        <p>
          Behind FashionHub is a passionate team of fashion enthusiasts, designers, and customer service experts. We are dedicated to bringing you the best shopping experience and are always here to help you find the perfect outfit.
        </p>
        <div className="team-members">
          <div className="team-member">
            <img src={`${process.env.PUBLIC_URL}/assets/img/about7.jpg`} alt="Team Member 1" />
            <h3>Aishwarya</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src={`${process.env.PUBLIC_URL}/assets/img/about8.jpg`} alt="Team Member 2" />
            <h3>Emily</h3>
            <p>Chief Designer</p>
          </div>
          <div className="team-member">
            <img src={`${process.env.PUBLIC_URL}/assets/img/about9.webp`} alt="Team Member 3" />
            <h3>Johnson</h3>
            <p>Customer Service Manager</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Contact Us</h2>
        <p>
          We love hearing from our customers! If you have any questions, feedback, or just want to say hello, don't hesitate to reach out to us.
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:support@fashionhub.com">support@fashionhub.com</a></li>
          <li><strong>Phone:</strong> (123) 456-7890</li>
          <li><strong>Address:</strong> 123 Fashion Street, Style City, FashionLand</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
