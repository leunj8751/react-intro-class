import { selector } from 'recoil';

import surveyStatus from './surveyState';

const questionsLength = selector({
  key: 'questionsLength',
  get: ({ get }) => {
    const questions = get(surveyStatus).questions;

    return questions.length;
  },
});

export default questionsLength;
