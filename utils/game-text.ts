type QuizData = {
  id: number;
  question: string;
  image: string;
  answers: string[];
  correct: string;
  selectedAnswer: string;
};

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
  {
    id: 3,
    question: '「いい腕時計してはりますなぁ」',
    image: '腕時計画像',
    answers: ['金持ちやね', '話長すぎんで', '奢ってくれ', '思いつかね〜'],
    correct: 'はよ帰ってや',
    selectedAnswer: '',
  },
  {
    id: 4,
    question: 'fuga',
    image: 'fuga',
    answers: ['fuga', 'fuga', 'fuga', 'fuga'],
    correct: 'fuga',
    selectedAnswer: '',
  },
  {
    id: 5,
    question: 'hoge',
    image: 'hoge',
    answers: ['hoge', 'hoge', 'hoge', 'hoge'],
    correct: 'hoge',
    selectedAnswer: '',
  },
];
