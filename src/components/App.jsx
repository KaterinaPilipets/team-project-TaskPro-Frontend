// // import { Suspense, lazy, useEffect } from 'react';
// import { Suspense, lazy } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { SharedLayout } from './SharedLayout/SharedLayout.js';
// // import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { setUser, setToken } from '../redux/auth/authSlice.js';

// const WelcomePage = lazy(() => import('../pages/WelcomePage'));
// const AuthPage = lazy(() => import('../pages/AuthPage'));
// const HomePage = lazy(() => import('../pages/HomePage'));
// export const App = () => {
// // const dispatch = useDispatch();
// // const isRefreshing = useSelector(authSelector.getIsRefreshing);

// //    useEffect(() => {
// //      dispatch(authOperation.refreshCurrentUser());
// //    }, [dispatch]);
//     const dispatch = useDispatch();

//     useEffect(() => {
//       // Отримати токен з localStorage або іншого джерела, якщо він там є
//       const token = localStorage.getItem('token');
//       if (token) {
//         dispatch(setToken(token));
//       }
//     }, [dispatch]);

//   return (
//     <>
//       <Suspense fallback={<p>Loading...</p>}>
//         {/* <Container> */}
//         <Routes>
//           <Route path="/" element={<WelcomePage />} />
//           <Route path="/welcome" element={<WelcomePage />} />
//           <Route path="/auth/:id" element={<AuthPage />} />
//           {/* <Route  path="/" element={  <PrivateRoute redirectTo="/welcome" component={<HomePage />} /> } /> */}
//           <Route path="/home" element={<SharedLayout />}>
//             <Route index element={<HomePage />} />
//           </Route>
//           <Route path="*" element={<WelcomePage />} />
//         </Routes>
//         {/* </Container> */}
//       </Suspense>
//     </>
//   );
// };


import React, { useEffect } from 'react';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout.js';
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/auth/authSlice.js';

const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage'));
const HomePage = lazy(() => import('../pages/HomePage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Отримати токен з localStorage або іншого джерела, якщо він там є
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setToken(token));
    }
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/auth/:id" element={<AuthPage />} />
          <Route path="/home" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="*" element={<WelcomePage />} />
        </Routes>
      </Suspense>
    </>
  );
};