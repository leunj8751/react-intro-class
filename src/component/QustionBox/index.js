import '../../App.css';

import { useState } from 'react';
import styled from 'styled-components';

import Body from '../Body';
import ButtonBox from '../ButtonBox';
import Desc from '../Desc';
import Title from '../Title';

function QuestionBox({ question, questionCount, step, answer, setAnswer }) {
  console.log(' :question');
  console.log(question);
  return (
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      />
      <ButtonBox questionCount={questionCount} step={step} />
    </QuestionBoxWrapper>
  );
}

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default QuestionBox;
