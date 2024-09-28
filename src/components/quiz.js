import React from 'react';

function Quiz({ question, currentQuestion, totalQuestions, userAnswer, onAnswer, onNext, onPrevious, onShowResult, showResult }) {
  const handleAnswerClick = (option) => {
    onAnswer(option);
  };

  const handleNextClick = () => {
    onNext();
  };

  return (
    <div className="quiz">
      <h2>Question {currentQuestion + 1} of {totalQuestions}</h2>
      <h3>{question.question}</h3>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <button
              onClick={() => handleAnswerClick(option)}
              className={`option-btn ${userAnswer === option ? 'selected' : ''} ${
                showResult
                  ? option === question.correctAnswer
                    ? 'correct'
                    : userAnswer === option && userAnswer !== question.correctAnswer
                    ? 'incorrect'
                    : ''
                  : ''
              }`}
              disabled={showResult}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      <div className="navigation">
        <button onClick={onPrevious} disabled={currentQuestion === 0}>
          Previous
        </button>
        {!showResult && userAnswer && (
          <button onClick={onShowResult}>Show Answer</button>
        )}
        <button onClick={handleNextClick} disabled={!userAnswer}>
          {currentQuestion === totalQuestions - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
}

export default Quiz;
