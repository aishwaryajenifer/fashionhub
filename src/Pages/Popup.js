// src/Popup.js
import React from 'react';
import './Popup.css';

const Popup = ({ isOpen, onClose, bodyShape }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Your Body Shape: {bodyShape}</h2>
        <div className="celebration-decorations">
          🎉🎉🎉
        </div>
        <a href="/products">
          <button  className="recommendations-button">View Recommendations</button>
        </a>
      </div>
    </div>
  );
};

export default Popup;
