import { QuizTextData } from '../utils/game-text';
import React, { useState, useEffect, useMemo } from 'react';
import RandomNum from './Random';
import { useRouter } from 'next/router';

const QuizList = () => {
  const MaxQuizNum: number = 4;
  const router = useRouter();

  // eslint-disable-next-line new-cap
  const QuestionArray = useMemo(() => RandomNum(MaxQuizNum), []);
  const [questionNum, setQuestionNum] = useState(0);

  useEffect(() => {
    console.log(questionNum);
    if (questionNum === MaxQuizNum) {
      router.replace('/Result');
    }
  }, [questionNum, router]);

  return (
    <div>
      <div>
        <h2>Q.{questionNum + 1}</h2>
        <h3>{QuizTextData[QuestionArray[questionNum]].question}</h3>
        <div>
          {QuizTextData[QuestionArray[questionNum]].answers.map((answer) => {
            return (
              <button key={answer} onClick={() => setQuestionNum(questionNum + 1)}>
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
