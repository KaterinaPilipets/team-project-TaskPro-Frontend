// import { Suspense, lazy, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { SharedLayout } from './SharedLayout/SharedLayout.js';
// import { useDispatch, useSelector } from 'react-redux';
// import { ScreenPage } from 'pages/ScreenPage.js';
// import { PrivateRouter, PublicRouter } from './RoutesAuthOperation.js';
// import { refreshUser } from 'redux/auth/authOperations.js';
// import { Loader } from './Loader/Loader.jsx';
// import { isRefreshing } from 'redux/auth/authSelectors.js';
// // import { useDispatch, useSelector } from 'react-redux';

// const WelcomePage = lazy(() => import('../pages/WelcomePage'));
// const AuthPage = lazy(() => import('../pages/AuthPage'));
// const HomePage = lazy(() => import('../pages/HomePage'));
// export const App = () => {
//   const dispatch = useDispatch();
//   const refreshing = useSelector(isRefreshing);
//   console.log("Ось refreshing до", refreshing) 

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   console.log("Ось refreshing після", refreshing) 
//   return  refreshing ? (<Loader />) : (
//     <>
//       <Suspense fallback={<p>Loading...</p>}>
//         <Routes>
//           <Route path="/" element={<WelcomePage />} />
//           {/* <Route path="/" element={<PublicRouter redirectTo="/welcome" component={<SharedLayout />} />} /> */}
//           <Route path="/welcome" element={<WelcomePage />} />
//           {/* <WelcomePage /> */}
//           <Route path="/auth/:id" element={<AuthPage />} />
//           {/* <Route path="/auth/:id" element={<PublicRouter redirectTo="/home" element={<AuthPage />} />} />               */}
//           {/* <Route  path="/home" element={  <PrivateRouter redirectTo="/welcome" component={<SharedLayout />} /> } /> */}
//           <Route path="/home" element={<PrivateRouter redirectTo="/welcome" component={<SharedLayout />} />}>
//             <Route index element={<HomePage />} />
//             <Route path=":boardId" element={<ScreenPage />} />
//           </Route>
//           {/* <Route path="*" element={<WelcomePage />} /> */}
//         </Routes>
//       </Suspense>
//     </>
//   );
// };

import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout.js';
import { useDispatch, useSelector } from 'react-redux';
import { ScreenPage } from 'pages/ScreenPage.js';
import { PrivateRouter } from './RoutesAuthOperation.js'; // PublicRouter
import { refreshUser } from 'redux/auth/authOperations.js';
import { Loader } from './Loader/Loader.jsx';
import { isRefreshing, isLoggedIn } from 'redux/auth/authSelectors.js';

const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage'));
const HomePage = lazy(() => import('../pages/HomePage'));

export const App = () => {
  const dispatch = useDispatch();
  const refreshing = useSelector(isRefreshing);
  const loggedUser = useSelector(isLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return refreshing ? (
    <Loader />
  ) : (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={
              loggedUser ? (
                <Navigate to="/home" replace={true} />
              ) : (
                <WelcomePage />
              )
            } 
          />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/auth/:id" element={<AuthPage />} />
          <Route path="/home" element={
              loggedUser ? (
                <PrivateRouter component={<SharedLayout />} />
              ) : (
                <Navigate to="/" replace={true} />
              )
            }
          >
            <Route index element={<HomePage />} />
            <Route path=":boardId" element={<ScreenPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};