import { QuizTextData } from '../utils/game-text';

const QuizList = () => {
  return (
    <div>
      {QuizTextData.map(({ question, answers, correct, selectedAnswer }, index) => {
        return (
          <div key={question}>
            <h2>Q.{index + 1}</h2>
            <h3>{question}</h3>
            {answers.map((answer) => {
              return (
                <button key={answer} onClick={() => console.log('test')}>
                  {answer}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default QuizList;
