import styled from 'styled-components';

import ProgressIndicator from '../../component/ProgressIndicator';
import QuestionBox from '../../component/QustionBox';

function SurveyPage() {
  return (
    <SurveyPageWrapper>
      <ProgressIndicator />
      <QuestionBox />
    </SurveyPageWrapper>
  );
}

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default SurveyPage;
