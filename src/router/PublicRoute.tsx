import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

interface PublicRouteProps {
  Component: JSX.Element;
}

export const PublicRoute: FC<PublicRouteProps> = ({ Component }) => {
  const { isAuth } = useSelector((state: any) => state.user);
  if (isAuth) {
    return <Navigate to='/profile' />;
  }

  return Component;
}