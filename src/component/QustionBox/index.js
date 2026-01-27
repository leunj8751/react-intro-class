import styled from 'styled-components';

import useCurrentAnswer from '../../hooks/useCurrentAnswer';
import useCurrentQuestion from '../../hooks/useCurrentQuestion';
import Body from '../Body';
import ButtonBox from '../ButtonBox';
import Desc from '../Desc';
import Title from '../Title';

function QuestionBox() {
  const question = useCurrentQuestion();
  const [answer, setAnswer] = useCurrentAnswer();

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
      <ButtonBox />
    </QuestionBoxWrapper>
  );
}

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default QuestionBox;
