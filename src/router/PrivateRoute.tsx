import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  Component: JSX.Element;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ Component }) => {
  const { isAuth } = useSelector((state: any) => state.user);
  if (!isAuth) {
    return <Navigate to='/login' />;
  }

  return Component;
}