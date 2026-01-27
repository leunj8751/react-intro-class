import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import useStep from '../../hooks/useStep';
import questionsLength from '../../stores/questions/questionsLength';
import Button from '../Button';

function ButtonBox() {
  const navigate = useNavigate();

  const questionCount = useRecoilValue(questionsLength);
  const step = useStep();
  const isLast = step === questionCount + 1;

  return (
    <ButtonBoxWrapper>
      {step === 0 || (
        <Button
          type="SECONDARY"
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </Button>
      )}
      {isLast ? (
        <Button
          type="PRIMARY"
          onClick={() => {
            navigate(`/survey/id/done`);
          }}
        >
          제출
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => {
            navigate(`${step + 1}`);
          }}
        >
          다음
        </Button>
      )}
    </ButtonBoxWrapper>
  );
}

const ButtonBoxWrapper = styled.div`
  margin-top: 72px;
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export default ButtonBox;
