import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import ProgressIndicator from '../../component/ProgressIndicator';
import QuestionBox from '../../component/QustionBox';

function SurveyPage() {
  const params = useParams();

  const questions = [
    {
      title: '질문 1 입니다.',
      desc: '설명1 입니다.',
      type: 'text',
      required: false,
      options: { placeholder: 'placeholder 입니다.' },
    },
    {
      title: '질문 2 입니다.',
      desc: '설명2 입니다.',
      type: 'textarea',
      required: false,
      options: { placeholder: 'placeholder 입니다.' },
    },
    {
      title: '질문 3 입니다.',
      desc: '설명3 입니다.',
      type: 'select',
      required: false,
      options: { items: ['답변1', '답변2'] },
    },
  ];

  const step = parseInt(params.step);

  const [answers, setAnswers] = useState([]);

  return (
    <SurveyPageWrapper>
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsCount={questions.length}
        step={step}
        answer={answers[step]}
        setAnswer={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;

            return newAnswers;
          });
        }}
      />
    </SurveyPageWrapper>
  );
}

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default SurveyPage;
