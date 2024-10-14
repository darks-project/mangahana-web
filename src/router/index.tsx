import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { Alert } from 'components/Alert';

import { PublicRoute } from './PublicRoute';

import { Home } from 'pages/Home';
import { BookSingle } from 'pages/BookSingle';
import { Reader } from 'pages/Reader';
import { Login } from 'pages/Login';
import { ProfileSettings } from 'pages/Settings/Profile';

import axios from 'axios';
import { login } from 'store/slices/user';
import { store } from 'store';
import { Profile, profileLoader } from 'pages/Profile';
import { SecuritySettings } from 'pages/Settings/Security';
import { PasswordSettings } from 'pages/Settings/Password';


export const Router = () => {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Outlet />,
      errorElement: <div>error</div>,
      loader: async () => {
        try {
          const res = await axios.get('/users/getMe');
          if (res.status === 200) {
            store.dispatch(login(res.data));
          }
        } catch {}

        return {};
      },
  
      children: [
        { path: '/login', element: <PublicRoute Component={<Login />} /> },

        { path: '/', element: <Home /> },
        { path: '/users/:username', element: <Profile />, loader: profileLoader },
        
        { path: '/settings', element: <ProfileSettings /> },
        { path: '/settings/security', element: <SecuritySettings /> },
        { path: '/settings/password', element: <PasswordSettings /> },

        { path: '/reader', element: <Reader /> },
        { path: '/:id', element: <BookSingle /> },
      ],
    }
  ]);

  return (
    <>
    <Alert />
      <RouterProvider router={router} />
    </>
  );
};