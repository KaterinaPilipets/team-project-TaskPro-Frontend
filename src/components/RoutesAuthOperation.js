import { Navigate } from 'react-router-dom';
import { isLoggedIn, isRefreshing } from '../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export const PrivateRouter = ({ component: Component, redirectTo = '/' }) => {
  const isLogged = useSelector(isLoggedIn);
  const isRefreshed = useSelector(isRefreshing);
  const shouldRedirect = !isRefreshed && !isLogged;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export const PublicRouter = ({ component: Component, redirectTo = '/' }) => {
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
