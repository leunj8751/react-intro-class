import { useParams } from 'react-router-dom';

function useServeyId() {
  const params = useParams();

  return parseInt(params.surveyId);
}

export default useServeyId;
