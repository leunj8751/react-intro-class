import { useRecoilValue } from 'recoil';

import answersState from '../stores/answers/atoms';

function useAnswers() {
  const answers = useRecoilValue(answersState);

  return answers;
}

export default useAnswers;
