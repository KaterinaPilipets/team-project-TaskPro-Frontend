// import { Navigate } from 'react-router-dom';
// import { useAuth } from 'hooks/useAuth';

// /**
//  * - If the route is private and the user is logged in, render the component
//  * - Otherwise render <Navigate> to redirectTo
//  */

// export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn, isRefreshing } = useAuth();
//   const shouldRedirect = !isLoggedIn && !isRefreshing;

//   return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
// };

import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { setToken } from '../redux/auth/authSelectors';
import { isLoggedIn, isRefreshing } from '../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export const PrivateRouter = ({ component: Component, redirectTo = '/' }) => {
  const isLogged = useSelector(isLoggedIn);
  const isRefreshed = useSelector(isRefreshing);
  const shouldRedirect = !isRefreshed && !isLogged;
  console.log("Ось isLogged:", isLogged)
  console.log("Ось isRefreshed:", isRefreshed)
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export const PublicRouter = ({ component: Component, redirectTo = '/'}) => {
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}

// export default PrivateRouter, PublicRouter ;