// CustomTShirt.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
import './customTShirt.css';
import TShirtPreview from './TShirtPreview';

const CustomTShirt = () => {
  const [text, setText] = useState(''); // Default text
  const [textSize, setTextSize] = useState(24); // Default text size
  const [textColor, setTextColor] = useState('#ffffff'); // Default text color
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSizeChange = (event) => {
    setTextSize(Number(event.target.value)); // Convert to number
  };

  const handleColorChange = (event) => {
    setTextColor(event.target.value); // Set selected color
  };

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: Date.now(), // Unique ID for the item
      text,
      textSize,
      textColor,
      quantity: 1, // Default quantity
      price: 50, // Price of the item
      product_img: '/assets/img/custom.jpg', // Path to the custom image
    }));
    alert('T-Shirt added to cart!');
  };

  return (
    <div className="custom-tshirt-container">
      <div className="customization">
        <h1>Customize Your T-Shirt</h1>
        <div className="customization-section">
          <label htmlFor="custom-text">Enter your text:</label>
          <input
            type="text"
            id="custom-text"
            value={text}
            onChange={handleChange}
            placeholder="Type here..."
          />
        </div>
        <div className="text-size-dropdown">
          <label htmlFor="text-size">Select text size:</label>
          <select id="text-size" value={textSize} onChange={handleSizeChange}>
            <option value={12}>Small</option>
            <option value={18}>Medium</option>
            <option value={24}>Large</option>
            <option value={30}>Extra Large</option>
          </select>
        </div>
        <div className="text-color-dropdown">
          <label htmlFor="text-color">Select text color:</label>
          <input
            type="color"
            id="text-color"
            value={textColor}
            onChange={handleColorChange}
          />
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
      <div className="preview">
        <TShirtPreview text={text} textSize={textSize} textColor={textColor} />
      </div>
    </div>
  );
};

export default CustomTShirt;
