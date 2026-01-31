import { selector } from 'recoil';

import getSurvey from '../../service/getSurvey';

const surveyStatus = selector({
  key: 'surveyStatus',
  get: async ({ get }) => {
    const response = await getSurvey(window.location.pathname.split('/')[2]);
    return response.data;
  },
});

export default surveyStatus;
