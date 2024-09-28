import React, { useState } from 'react';
import Quiz from './components/quiz';
import Result from './components/result';
import './App.css';

const questions = [
  {
    question: "What is the primary focus of Web3Bridge?",
    options: ["Social media marketing", "Blockchain education and development", "E-commerce solutions", "Mobile app development"],
    correctAnswer: "Blockchain education and development"
  },
  {
    question: "Which continent does Web3Bridge primarily target for developer training?",
    options: ["North America", "Europe", "Asia", "Africa"],
    correctAnswer: "Africa"
  },
  {
    question: "What programming language is commonly taught for smart contract development at Web3Bridge?",
    options: ["Python", "Java", "Solidity", "C++"],
    correctAnswer: "Solidity"
  },
  {
    question: "What type of applications does Web3Bridge focus on developing?",
    options: ["Mobile apps", "Desktop software", "Web applications", "Decentralized applications (DApps)"],
    correctAnswer: "Decentralized applications (DApps)"
  },
  {
    question: "Which blockchain platform is primarily used in Web3Bridge's curriculum?",
    options: ["Bitcoin", "Ethereum", "Cardano", "Polkadot"],
    correctAnswer: "Ethereum"
  },
  {
    question: "What is one of the main goals of Web3Bridge?",
    options: ["Promoting traditional banking", "Bridging the gap between web development and blockchain", "Developing social media platforms", "Creating e-commerce solutions"],
    correctAnswer: "Bridging the gap between web development and blockchain"
  },
  {
    question: "What type of events does Web3Bridge often organize to challenge developers?",
    options: ["Music festivals", "Sports tournaments", "Hackathons", "Art exhibitions"],
    correctAnswer: "Hackathons"
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answer;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowResult(false);
    }
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers(Array(questions.length).fill(null));
    setQuizCompleted(false);
    setShowResult(false);
  };

  return (
    <div className="App">
      <h1>React Quiz App(assignment)</h1>
      {!quizCompleted ? (
        <Quiz
          question={questions[currentQuestion]}
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          userAnswer={userAnswers[currentQuestion]}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onShowResult={handleShowResult}
          showResult={showResult}
        />
      ) : (
        <Result
          questions={questions}
          userAnswers={userAnswers}
          onRestart={restartQuiz}
        />
      )}
    </div>
  );
}

export default App;
