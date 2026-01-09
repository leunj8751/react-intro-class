import '../../App.css';

import { useState } from 'react';

import Body from '../Body';
import ButtonBox from '../ButtonBox';
import Desc from '../Desc';
import Title from '../Title';

function QuestionBox({ question, questionCount, step, answer, setAnswer }) {
  return (
    <div className="question_box">
      <Title title={question.title} />
      <Desc content={question.desc} />
      <Body type={question.type} answer={answer} setAnswer={setAnswer} />
      <ButtonBox questionCount={questionCount} step={step} />
    </div>
  );
}

export default QuestionBox;
