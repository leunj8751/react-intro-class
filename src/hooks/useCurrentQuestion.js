import { useRecoilValue } from 'recoil';

import questionState from '../stores/questions/atoms';
import useStep from './useStep';

function useCurrentQuestion() {
  const step = useStep();
  const questions = useRecoilValue(questionState);

  return questions[step];
}

export default useCurrentQuestion;
