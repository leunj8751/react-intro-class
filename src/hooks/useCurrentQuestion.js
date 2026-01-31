import { useRecoilValue } from 'recoil';

import surveyStatus from '../stores/survey/surveyState';
import useStep from './useStep';

function useCurrentQuestion() {
  const step = useStep();
  const questions = useRecoilValue(surveyStatus)?.questions;

  return questions[step];
}

export default useCurrentQuestion;
