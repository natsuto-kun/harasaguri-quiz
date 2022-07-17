import { QuizTextData } from '../utils/game-text';
import React, { useState, useEffect, useMemo } from 'react';
import RandomNum from './Random';
import { useRouter } from 'next/router';

const QuizList = () => {
  const MaxQuizNum: number = QuizTextData.length - 1;
  const router = useRouter();

  // eslint-disable-next-line new-cap
  const QuestionArray = useMemo(() => RandomNum(MaxQuizNum), []);
  const [questionNum, setQuestionNum] = useState(0);
  const [countAnswer, setCountAnswer] = useState(0);

  const inputAnswer = (selectNum: number, answer: string) => {
    // console.log('QustionArray' + JSON.stringify(QuestionArray));
    // console.log(answer);
    // console.log(QuizTextData[QuestionArray[selectNum]].correct);
    // console.log('正解数:' + countAnswer);
    if (answer === QuizTextData[QuestionArray[selectNum]].correct) {
      setCountAnswer((prev) => prev + 1);
    }
    if (questionNum === MaxQuizNum) {
      router.replace('/Result');
    } else {
      setQuestionNum(questionNum + 1);
    }
  };

  // useEffect(() => {
  //   if (questionNum

  return (
    <div>
      <div>
        <h2>Q.{questionNum + 1}</h2>
        <h3>{QuizTextData[QuestionArray[questionNum]].question}</h3>
        <div>
          {QuizTextData[QuestionArray[questionNum]].answers.map((answer) => {
            return (
              <button
                key={answer}
                onClick={() => {
                  inputAnswer(questionNum, answer);
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
