import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
