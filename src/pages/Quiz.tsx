import { css } from '@emotion/react'
import { QuizTextData } from '../../utils/game-text'

const QuizPage = () => {
  return (
    <div>
      {QuizTextData.map(({ question, answers, correct, selectedAnswer }, index) => {
        return (
          <div key={question}>
            <h3>{question}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default QuizPage
