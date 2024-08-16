import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import ResultPage from './Resultpage';
import './QuizPage.css';

const questions = [
  {
    id: 1,
    question: "What's your preferred style?",
    options: ["Casual", "Formal", "Sporty", "Bohemian"]
  },
  {
    id: 2,
    question: "What color palette do you prefer?",
    options: ["Bright", "Neutral", "Dark", "Pastel"]
    
  },
  {
    id: 3,
    question: "What's your preferred style?",
    options: ["Casual", "Formal", "Sporty", "Bohemian"]
  },
  
];

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (option) => {
    setAnswers([...answers, option]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className="quiz-page">
      {isFinished ? (
        <ResultPage answers={answers} />
      ) : (
        <QuestionCard
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default QuizPage;
