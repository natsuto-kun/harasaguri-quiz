import { css } from '@emotion/react'
import { QuizTextData } from '../../utils/game-text'

const QuizPage = () => {
  return (
    <div>
      <p>{QuizTextData[0].question}</p>
    </div>
  )
}

export default QuizPage
