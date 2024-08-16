import React from 'react';

function ColorAnalysis({ colors, palette }) {
  return (
    <div>
      <h2>Your Suggested Colors</h2>
      <div style={{ display: 'flex' }}>
        {colors.map((color, index) => (
          <div key={index} style={{ backgroundColor: `rgb(${color.join(',')})`, width: '50px', height: '50px' }}></div>
        ))}
      </div>
      <h3>You have a {palette} palette</h3>
    </div>
  );
}

export default ColorAnalysis;
