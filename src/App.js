import './App.css';

import { useState } from 'react';

import ProgressIndicator from './component/ProgressIndicator';
import QuestionBox from './component/QustionBox';

function App() {
  const questions = [
    {
      title: '질문 1 입니다.',
      desc: '설명1 입니다.',
      type: 'text',
      required: false,
      options: {},
    },
    {
      title: '질문 2 입니다.',
      desc: '설명2 입니다.',
      type: 'select',
      required: false,
      options: {},
    },
  ];

  const step = 0;

  const [answers, setAnswers] = useState([]);

  return (
    <>
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsCount={questions.length}
        step={step}
        answer={answers[step]}
        setAnswer={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = answers;
            return newAnswers;
          });
        }}
      />
    </>
  );
}

export default App;
