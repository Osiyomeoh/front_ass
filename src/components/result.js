import React from 'react';

function Result({ questions, userAnswers, onRestart }) {
  const correctAnswers = questions.filter((q, i) => q.correctAnswer === userAnswers[i]).length;

  return (
    <div className="result">
      <h2>Quiz Results</h2>
      <p>You got {correctAnswers} out of {questions.length} questions correct.</p>
      <ul>
        {questions.map((q, i) => (
          <li key={i}>
            <strong>Q{i + 1}:</strong> {q.question}<br />
            Your answer: {userAnswers[i] || 'Not answered'}<br />
            Correct answer: {q.correctAnswer}<br />
            {userAnswers[i] === q.correctAnswer ? '✅ Correct' : '❌ Incorrect'}
          </li>
        ))}
      </ul>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
}

export default Result;
