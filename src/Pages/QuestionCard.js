import React from 'react';
import './QuestionCard.css';

const QuestionCard = ({ question, onAnswer }) => {
  return (
    <div className="question-card">
      
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => onAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
