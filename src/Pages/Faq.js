import React, { useState } from 'react';
import './Faq.css'; 

const faqs = [
    {
        question: "What sizes do you offer?",
        answer: "We offer a wide range of sizes from XS to XL. Please refer to our size chart for exact measurements."
    },
    {
        question: "Can I return or exchange an item?",
        answer: "Yes, you can return or exchange items within 30 days of receipt. Items must be in their original condition and packaging."
    },
    {
        question: "How do I track my order?",
        answer: "Once your order has shipped, you will receive a tracking number via email. You can use this number to track your order on our website."
    },
    {
        question: "Do you offer international shipping?",
        answer: "Yes, we offer international shipping. Shipping costs and delivery times vary depending on the destination."
    },
    {
        question: "How can I contact customer support?",
        answer: "You can contact our customer support team via email at support@fashionhub.com or by calling us at (123) 456-7890."
    },
    {
        question: "What is your privacy policy?",
        answer: "Your privacy is important to us. We do not share your personal information with third parties. For more details, please read our Privacy Policy."
    },
    {
        question: "How do I apply a discount code?",
        answer: "During checkout, you can enter your discount code in the 'Promo Code' field to apply the discount to your order."
    },
];

const Faq = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    city: '',
    eventName: 'Engagement', 
    date: '',
    location: '',
    venue: '',
    partnership: 'No',
    population: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="container">
      
      <div className="faq-section">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
