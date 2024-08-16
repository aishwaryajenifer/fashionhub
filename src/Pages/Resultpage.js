import React from 'react';
import './Resultpage.css';

const ResultPage = ({ answers }) => {
  const styleType = determineStyle(answers);

  return (
    <div className="result-page">
      <h2>Your Fashion Style</h2>
      <p>You are a {styleType} style expert!</p>
    </div>
  );
};

const determineStyle = (answers) => {
  return 'Casual'; // Replace with actual logic
};

export default ResultPage;
