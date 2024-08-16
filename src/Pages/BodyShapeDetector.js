import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Popup from './Popup'; // Import the Popup component
import './BodyShapeDetector.css'; // Import the CSS for styling

const BodyShapeDetector = () => {
  const [height, setHeight] = useState('');
  const [hipSize, setHipSize] = useState('');
  const [shoulderLength, setShoulderLength] = useState('');
  const [waistSize, setWaistSize] = useState('');
  const [bustSize, setBustSize] = useState('');
  const [bodyShape, setBodyShape] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8082/api/body-shape', {
        height: parseFloat(height),
        hipSize: parseFloat(hipSize),
        shoulderLength: parseFloat(shoulderLength),
        waistSize: parseFloat(waistSize),
        bustSize: parseFloat(bustSize),
      });
      setBodyShape(response.data.shape);
      setIsPopupOpen(true); // Open the popup on successful response
    } catch (error) {
      console.error('Error fetching body shape:', error);
    }
  };

  const handleChange = (e, setter) => {
    const value = e.target.value;
    if (value === '' || (Number(value) >= 0 && !isNaN(Number(value)))) {
      setter(value);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="body-shape-detector-container">
      <div className="form-container">
        <h1>Body Shape Detector</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Height (feet):
            <input
              type="number"
              value={height}
              onChange={(e) => handleChange(e, setHeight)}
              placeholder="Enter height in feet"
            />
          </label>
          <label>
            Hip Size (inch):
            <input
              type="number"
              value={hipSize}
              onChange={(e) => handleChange(e, setHipSize)}
              placeholder="Enter hip size in inch"
            />
          </label>
          <label>
            Shoulder Length (inch):
            <input
              type="number"
              value={shoulderLength}
              onChange={(e) => handleChange(e, setShoulderLength)}
              placeholder="Enter shoulder length in inch"
            />
          </label>
          <label>
            Waist Size (inch):
            <input
              type="number"
              value={waistSize}
              onChange={(e) => handleChange(e, setWaistSize)}
              placeholder="Enter waist size in inch"
            />
          </label>
          <label>
            Bust Size (inch):
            <input
              type="number"
              value={bustSize}
              onChange={(e) => handleChange(e, setBustSize)}
              placeholder="Enter bust size in inch"
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="image-container">
        <img src="../assets/img/shape8.jpg" alt="Static Image" className="static-image" />
      </div>
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        bodyShape={bodyShape}
      />
    </div>
  );
};

export default BodyShapeDetector;
