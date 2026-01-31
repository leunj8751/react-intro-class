import mainApi from './apis/mainApi';

function getSurvey(param) {
  return mainApi.get(`/surveys/${param}`);
}

export default getSurvey;
