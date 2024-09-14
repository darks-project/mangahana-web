import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { MainTemplate } from 'templates/Main';

import { Home } from 'pages/Home';
import { BookSingle } from 'pages/BookSingle';
import { Reader } from 'pages/Reader';

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Outlet />,
      errorElement: <div>error</div>,
  
      children: [
        { path: '/', element: <Home /> },

        { path: '/reader', element: <Reader /> },
        { path: '/:id', element: <BookSingle /> },
      ],
    }
  ]);

  return <RouterProvider router={router} />;
};