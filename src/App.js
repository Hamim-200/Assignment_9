import './App.css';
import Main from './components/Main/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home'
import QuizDetail from './components/QuizDetails/QuizDetail';
import Analytics from './components/Analytics/Analytics'
import Blogs from './components/Blogs/Blogs'
import Error from './components/Error/Error';
import FrontPage from './components/FrontPage/FrontPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, errorElement: <Error></Error>, children: [
        { path: '/', loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'), element: <FrontPage></FrontPage> },
        { path: '/home', loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'), element: <Home> </Home> },
        { path: '/category/:quizId', loader: async ({ params }) => fetch(` https://openapi.programming-hero.com/api/quiz/${params.quizId}`), element: <QuizDetail></QuizDetail> },
        { path: '/analytics', loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'), element: <Analytics></Analytics> },
        { path: '/blogs', element: <Blogs></Blogs> }
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
