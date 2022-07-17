import { QuizTextData } from '../utils/game-text';
import React, { useState, useMemo } from 'react';
import NumArray from './Random';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

const question = css`
  text-align : center ;
  padding : 20px ;
  background-color : #FFF ;
  font-size : 25px ;
  font-family : "Helvetica" ;
  border : 3px solid #000 ;
  border-radius : 6px ;
  box-shadow : 0px 8px 10px -7px;
`

const selection = css`
  border : 3px solid #000;
  width:250px;
  height:50px;
  font-size : 20px ;
  font-family : "Comic Sans MS" ;
  color:black;
  background-color: white ;
  text-align:center;
  line-height:50px;
  border-radius: 6px;
  margin :10px;
  box-shadow : 0px 8px 10px -7px;
`


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
        <h3 css={question}>{QuizTextData[currentQuestion].question}</h3>
        <div>
          {QuizTextData[currentQuestion].answers.map((answer) => {
            return (
              <button
                css={selection}
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
