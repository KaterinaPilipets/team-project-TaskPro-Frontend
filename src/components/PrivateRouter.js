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

import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setToken } from '../redux/auth/authSelectors';

const PrivateRouter = ({ element, redirectTo, ...rest }) => {
  const token = useSelector(setToken);
  console.log(token)

  return (
    <Route
      {...rest}
      element={token ? <Navigate to={redirectTo} replace /> : element}
    />
  );
};

export default PrivateRouter;