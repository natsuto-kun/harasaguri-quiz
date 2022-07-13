type QuizData = {
  id: number
  question: string
  image: string
  choices1: string
  choices2: string
  choices3: string
  choices4: string
  answer: string
}

export const QuizTextData: QuizData[] = [
  {
    id: 1,
    question: '問題文を入れてね',
    image: '画像のパスを入れてね',
    choices1: '選択肢1個目',
    choices2: '選択肢2個目',
    choices3: '選択肢3個目',
    choices4: '選択肢4個目',
    answer: '正解の選択肢を入れてね',
  },
]
