import { QuizTextData } from '../utils/game-text';
import React, { useState, useMemo } from 'react';
import RandomNum from './Random';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import Image from 'next/image';

const questionText = css`
  padding-left: 20px;
  margin: auto;
  text-align: center;
  font-size: 25px;
  font-family: 'Helvetica';
`;
const questionBox = css`
  padding: 20px;
  width: 0px
  height: 80px;
  background-color: #fff;
  border: 3px solid #000;
  border-radius: 6px;
  box-shadow: 0px 8px 10px -7px;
`;

const selection = css`
  border: 3px solid #000;
  width: 250px;
  height: 50px;
  font-size: 20px;
  font-family: 'Comic Sans MS';
  color: black;
  background-color: white;
  text-align: center;
  line-height: 50px;
  border-radius: 6px;
  margin: 10px;
  box-shadow: 0px 8px 10px -7px;
`;
const image = css`
  display: flex;
  justify-content: center;
  margin: 20px;
`;
const flexCenter = css`
  display: flex;
  justify-content: center;
`;
const QuizList = () => {
  const MaxQuizNum: number = 4;
  const router = useRouter();
  const DefaultImage: number = 3;

  // eslint-disable-next-line new-cap
  const QuestionArray = useMemo(() => RandomNum(MaxQuizNum), []);
  const [questionNum, setQuestionNum] = useState(0);
  const [countAnswer, setCountAnswer] = useState(0);
  const [changeImage, setChangeImage] = useState(DefaultImage);
  const [currentQuestion, setCurrentQuestion] = useState(QuestionArray[questionNum]);
  console.log(QuizTextData);

  const inputAnswer = (answer: string) => {
    console.log(answer);
    console.log(QuizTextData[currentQuestion].correct);
    console.log(QuizTextData[currentQuestion].correct === answer);

    if (answer === QuizTextData[currentQuestion].correct) {
      setCountAnswer((prev) => prev + 1);
      setChangeImage((prev) => prev + 1);
    } else {
      setChangeImage((prev) => prev - 1);
      if (changeImage == 0) {
        router.replace('/GameOver');
      }
    }
    if (questionNum === MaxQuizNum) {
      localStorage.setItem('countAnswer', JSON.stringify(countAnswer));
      router.replace('/Result');
    } else {
      setQuestionNum((prev) => prev + 1);
      console.log(questionNum);

      setCurrentQuestion(QuestionArray[questionNum]);
    }
  };

  return (
    <div>
      <div>
        <div css={questionBox}>
          <h2 css={questionText}>
            Q.{questionNum + 1}
            {QuizTextData[currentQuestion].question}
          </h2>
        </div>
        <div css={image}>
          {changeImage <= 1 ? (
            <Image width={400} height={400} src='/images/bad_3.png' />
          ) : changeImage == 2 ? (
            <Image width={400} height={400} src='/images/bad_2.png' />
          ) : changeImage == 4 ? (
            <Image width={400} height={400} src='/images/good_2.png' />
          ) : changeImage >= 5 ? (
            <Image width={400} height={400} src='/images/good_3.png' />
          ) : (
            <Image width={400} height={400} src='/images/default.png' />
          )}
        </div>
        <div css={flexCenter}>
          {QuizTextData[currentQuestion].answers.map((answer) => {
            return (
              <button
                css={selection}
                key={answer}
                onClick={() => {
                  inputAnswer(answer);
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
