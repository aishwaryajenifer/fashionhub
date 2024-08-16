import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="help-page">
      <div className="container">
        <h1 className="page-title">Help & Support</h1>

        <section className="section">
          <h2 className="section-title">Introduction</h2>
          <p>Welcome to the FashionHub Help Page. Here you will find answers to frequently asked questions, information on managing your account, handling orders, and more.</p>
        </section>

        <section className="section">
          <h2 className="section-title">FAQs</h2>
          <div className="faq">
            <h3 className="faq-question">How do I place an order?</h3>
            <p>To place an order, browse our collection, select the items you wish to purchase, and click 'Add to Cart'. Proceed to checkout and follow the instructions to complete your purchase.</p>
          </div>
          <div className="faq">
            <h3 className="faq-question">What payment methods are accepted?</h3>
            <p>We accept various payment methods including credit/debit cards, PayPal, and other secure payment options. Check the payment section during checkout for more details.</p>
          </div>
          {/* Add more FAQs as needed */}
        </section>

        <section className="section">
          <h2 className="section-title">Order Issues</h2>
          <div className="order-issue">
            <h3 className="order-issue-title">What should I do if I receive a damaged item?</h3>
            <p>If you receive a damaged item, please contact our support team immediately with your order number and photos of the damaged item. We will assist you with the return or replacement process.</p>
          </div>
          <div className="order-issue">
            <h3 className="order-issue-title">How can I return or exchange an item?</h3>
            <p>To return or exchange an item, please visit our Returns & Exchanges page for instructions. Ensure the items are in their original condition and packaging.</p>
          </div>
          {/* Add more Order Issues as needed */}
        </section>

        <section className="section">
          <h2 className="section-title">Account Management</h2>
          <div className="account-info">
            <h3 className="account-info-title">How do I create an account?</h3>
            <p>To create an account, click on 'Sign Up' at the top of the page and follow the registration process. You will need to provide your email address and create a password.</p>
          </div>
          <div className="account-info">
            <h3 className="account-info-title">I forgot my password. How can I reset it?</h3>
            <p>If you forgot your password, click on 'Forgot Password' on the login page. Follow the instructions to reset your password via email.</p>
          </div>
          {/* Add more Account Management information as needed */}
        </section>

        <section className="section">
          <h2 className="section-title">Shipping & Delivery</h2>
          <div className="shipping-info">
            <h3 className="shipping-info-title">What are the shipping options?</h3>
            <p>We offer various shipping options including standard, express, and expedited shipping. Choose your preferred option at checkout.</p>
          </div>
          <div className="shipping-info">
            <h3 className="shipping-info-title">How can I track my order?</h3>
            <p>You can track your order using the tracking number provided in your order confirmation email. Visit our tracking page to enter your number and view the status of your shipment.</p>
          </div>
          {/* Add more Shipping & Delivery information as needed */}
        </section>

        <section className="section">
          <h2 className="section-title">Contact Us</h2>
          <p>If you need further assistance, please contact our support team:</p>
          <ul>
            <li>Email: support@fashionhub.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Fashion Street, New York, NY, 10001</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Contact;
