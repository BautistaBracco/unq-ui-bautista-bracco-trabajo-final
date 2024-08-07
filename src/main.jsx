import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Game from './pages/game/Game';
import ChooseDifficulty from './pages/chooseDificulty/ChooseDifficulty';
import NotFound from './pages/notFound/NotFound';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />,
   },
   { path: '/choose-difficulty', element: <ChooseDifficulty /> },
   {
      path: '/game/:difficulty',
      element: <Game />,
   },
   { path: '*', element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
