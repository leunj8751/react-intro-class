import '../App.css';

import { useState } from 'react';

import ButtonBox from './ButtonBox';
import QuestionAnswer from './QuestionAnswer';
import QuestionContent from './QuestionContent';
import QuestionTitle from './QuestionTitle';

function QuestionBox() {
  var [title, setTitle] = useState('첫번째 질문입니다. 답변해주세요.');
  var [content, setContent] = useState('이 항목은 객관식 입니다.');
  var [questionType, setQuestionType] = useState('choice'); //choice, short, essay
  var [questionAnswer, setQuestionAnswer] = useState([
    'focused',
    'active',
    'test',
  ]);

  return (
    <div className="question_box">
      <QuestionTitle title={title} />
      <QuestionContent content={content} />
      <QuestionAnswer type={questionType} answer={questionAnswer} />
      <ButtonBox />
    </div>
  );
}

export default QuestionBox;
