type QuizData = {
  id: number
  question: string
  image: string
  answers: string[]
  correct: string
  selectedAnswer: string
}

export const QuizTextData: QuizData[] = [
  {
    id: 1,
    question: '問題文を入れてね',
    image: '画像のパスを入れてね',
    answers: ['answer1', 'answer2', 'answer3', 'answer4'],
    correct: '正解の選択肢を入れてね',
    selectedAnswer: '',
  },
  {
    id: 2,
    question: 'お茶漬けを出された！',
    image: 'お茶漬け画像',
    answers: ['もっと居ていいよ', 'はよ帰ってや', 'hoge', 'fuga'],
    correct: 'はよ帰ってや',
    selectedAnswer: '',
  },
]
