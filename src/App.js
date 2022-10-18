import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Analytics from './components/Analytics/Analytics';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import QuizDetail from './components/QuizDetail/QuizDetail';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/catagory/:quizId',
          loader: async ({ params }) => fetch(` https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element: <QuizDetail></QuizDetail>
        },
        {
          path: '/analytics',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Analytics></Analytics>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        }

      ]

    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
