import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { Home } from 'pages/Home';
import { BookSingle } from 'pages/BookSingle';
import { Reader } from 'pages/Reader';
import { Login } from 'pages/Login';

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Outlet />,
      errorElement: <div>error</div>,
  
      children: [
        { path: '/login', element: <Login /> },

        { path: '/', element: <Home /> },

        { path: '/reader', element: <Reader /> },
        { path: '/:id', element: <BookSingle /> },
      ],
    }
  ]);

  return <RouterProvider router={router} />;
};