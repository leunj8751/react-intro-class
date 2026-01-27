import { selector } from 'recoil';

import questionState from './atoms';

const questionsLength = selector({
  key: 'questionsLength',
  get: ({ get }) => {
    const questions = get(questionState);

    return questions.length;
  },
});

export default questionsLength;
