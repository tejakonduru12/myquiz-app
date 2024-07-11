// src/components/Quiz.js
import React, { useState } from 'react';
import Question from './Question';
import Timer from './Timer';
import Score from './Score';
import questions from '../data/questions';
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsQuizOver(true);
    }
  };

  const handleTimeout = () => {
    setIsQuizOver(true);
  };

  return (
    <div className="quiz">
      {isQuizOver ? (
        <Score score={score} total={questions.length} />
      ) : (
        <>
          <Timer duration={30} onTimeout={handleTimeout} />
          <Question
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            handleAnswer={handleAnswer}
          />
        </>
      )}
    </div>
  );
};

export default Quiz;
