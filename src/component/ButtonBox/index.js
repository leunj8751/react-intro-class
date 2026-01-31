import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import useAnswers from '../../hooks/useAnswers';
import useStep from '../../hooks/useStep';
import useServeyId from '../../hooks/useSurveyId';
import postAnswers from '../../service/postAnswers';
import questionsLength from '../../stores/survey/questionsLength';
import Button from '../Button';

function ButtonBox() {
  const navigate = useNavigate();

  const questionCount = useRecoilValue(questionsLength);
  const step = useStep();

  const isLast = step + 1 === questionCount;
  const surveyId = useServeyId();
  const answers = useAnswers();

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
            postAnswers(surveyId, answers)
              .then(() => {
                navigate(`/complete/${surveyId}`);
              })
              .catch((err) => {
                alert('에러가 발생했습니다. 다시 시도해주세요.');
              });
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
