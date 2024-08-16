// TShirtPreview.js
import React from 'react';
import './Tshirtpreview.css';

const TShirtPreview = ({ text, textSize, textColor }) => {
  const textStyle = {
    fontSize: `${textSize}px`,
    color: textColor,
    position: 'absolute',
    top: '40%', // Adjust as needed
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontWeight: 'bold',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  };

  return (
    <div className="tshirt-preview">
      <div className="tshirt">
        <img
          src="/assets/img/custom.jpg"
          alt="Custom T-Shirt"
          className="tshirt-image"
        />
        <div className="custom-text" style={textStyle}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default TShirtPreview;
