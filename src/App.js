import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled from 'styled-components';

import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/survey/:surveyId',
      element: <SurveyPage />,
      children: [
        {
          path: ':step',
          element: <SurveyPage />,
        },
      ],
    },
    {
      path: '/complete',
      element: <CompletionPage />,
    },
  ]);

  return (
    <AppWrapper>
      <Box>
        <RouterProvider router={router} />
      </Box>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Box = styled.div`
  width: 700px;
  min-height: 500px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  padding: 60px;
  display: flex;
  box-sizing: border-box;
  position: relative;
`;

export default App;
