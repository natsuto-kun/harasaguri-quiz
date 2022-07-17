import { QuizTextData } from '../utils/game-text';
import React, { useState, useMemo } from 'react';
import NumArray from './Random';
import { useRouter } from 'next/router';

const QuizList = () => {
  const MaxQuizNum: number = 5;
  const router = useRouter();

  // eslint-disable-next-line new-cap
  const QuestionArray = useMemo(() => NumArray(MaxQuizNum), []);
  const [questionNum, setQuestionNum] = useState(0);
  const [countAnswer, setCountAnswer] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(QuestionArray[questionNum]);

  const inputAnswer = (answer: string) => {
    if (answer === QuizTextData[currentQuestion].correct) {
      setCountAnswer((prev) => prev + 1);
    }
  };

  return (
    <div>
      <div>
        <h2>Q.{questionNum + 1}</h2>
        <h3>{QuizTextData[currentQuestion].question}</h3>
        <div>
          {QuizTextData[currentQuestion].answers.map((answer) => {
            return (
              <button
                key={answer}
                onClick={() => {
                  setCurrentQuestion(QuestionArray[questionNum]);
                  inputAnswer(answer);
                  if (questionNum === MaxQuizNum - 1) {
                    localStorage.setItem('countAnswer', JSON.stringify(countAnswer));
                    router.replace('/Result');
                  }
                  setQuestionNum((prev) => prev + 1);
                }}
              >
                {answer}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizList;
