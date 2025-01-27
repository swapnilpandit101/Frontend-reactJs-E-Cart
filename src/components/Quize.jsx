import React, { useRef, useState } from 'react';
import QuestionsList from './QuestionsList';

function Quize() {
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Rome", "Paris"],
      answer: "Rome",
    },
    {
      id: 2,
      question: "Who wrote the epic 'Mahabharata'?",
      options: ["Valmiki", "Kalidasa", "Ved Vyasa", "Tulsidas"],
      answer: "Kalidasa",
    },
    {
      id: 3,
      question: "What is the chemical symbol for water?",
      options: ["CO₂", "H₂O", "O₂", "CH₄"],
      answer: "H₂O",
    },
    {
      id: 4,
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Mercury", "Venus", "Mars", "Jupiter"],
      answer: "Mars",
    },
    {
      id: 5,
      question: "What is the boiling point of water at sea level?",
      options: ["90°C", "100°C", "110°C", "120°C"],
      answer: "100°C",
    },
    {
      id: 6,
      question: "What is the SI unit of force?",
      options: ["Newton", "Pascal", "Watt", "Joule"],
      answer: "Newton",
    }, 
  ];

  const [curans, setCurans] = useState(null);
  const [curIndex, setCurIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuizHandler = () => {
    setQuizStarted(true);
  };

  const butHandler = () => {
    if (questions[curIndex].answer === curans) {
      setScore(score + 1);
    }
    setCurIndex(curIndex + 1);
    setCurans(null); // Reset selected answer for the next question
  };

  const retakeHandler = () => {
    setCurIndex(0);
    setScore(0);
    setCurans(null);
    setQuizStarted(false);
  };

  return (
    <div className="container m-4 styled-div">
      {quizStarted ? 
        <>
          {curIndex < questions.length ?
            <>
              <QuestionsList question={questions[curIndex].question} options={questions[curIndex].options} handleClick={setCurans}
              />
              <button className={curans === null ? 'btn btn-secondary but' : 'btn btn-primary but'} disabled={curans === null} onClick={butHandler}
              >Next Q </button>
            </> : 
            <>
              <h1 style={{ textAlign: 'center' }}>Your Score: {score}</h1>
              <button className="btn btn-danger but" onClick={retakeHandler}> Retake Test </button>
            </>
          }
        </>
       : 
        <>
          <h1 style={{ color: 'deeppink', textAlign: 'center' }}>Welcome Students</h1>
          <button className="btn btn-info but" onClick={startQuizHandler}>
            Start Quiz
          </button>
        </>
      }
    </div>
  );
}

export default Quize;