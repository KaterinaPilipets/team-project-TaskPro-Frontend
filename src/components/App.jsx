// import { Suspense, lazy, useEffect } from 'react';
import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout.js';
import { useDispatch } from 'react-redux';
// import { setToken } from 'redux/auth/authSlice.js';
// import { useDispatch, useSelector } from 'react-redux';

const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
export const App = () => {
const dispatch = useDispatch();
// const isRefreshing = useSelector(authSelector.getIsRefreshing);

   useEffect(() => {
    // const token = localStorage.getItem('token');
    // dispatch(setToken);
    // dispatch(authOperation.refreshCurrentUser());
   }, [dispatch]);

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        {/* <Container> */}
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/auth/:id" element={<AuthPage />} />
          {/* <Route  path="/" element={  <PrivateRoute redirectTo="/welcome" component={<HomePage />} /> } /> */}
          <Route path="/home" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="*" element={<WelcomePage />} />
        </Routes>
        {/* </Container> */}
      </Suspense>
    </>
  );
};



// // import { Suspense, lazy, useEffect } from 'react';
// import { Suspense, lazy, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { SharedLayout } from './SharedLayout/SharedLayout.js';
// import { useDispatch } from 'react-redux';
// // import { setToken } from 'redux/auth/authSlice.js';
// import PrivateRoute from './PrivateRouter.js';
// // import { useDispatch, useSelector } from 'react-redux';

// const WelcomePage = lazy(() => import('../pages/WelcomePage'));
// const AuthPage = lazy(() => import('../pages/AuthPage'));
// const HomePage = lazy(() => import('../pages/HomePage'));
// export const App = () => {
// const dispatch = useDispatch();
// // const isRefreshing = useSelector(authSelector.getIsRefreshing);

//    useEffect(() => {
//     // const token = localStorage.getItem('token');
//     // dispatch(setToken);
//     //  dispatch(authOperation.refreshCurrentUser());
//    }, [dispatch]);

//   return (
//     <>
//       <Suspense fallback={<p>Loading...</p>}>
//         {/* <Container> */}
//         <Routes>
//           <Route path="/" element={<WelcomePage />} />
//           <Route path="/welcome" element={<WelcomePage />} />
//           <Route
//           path="/"
//           element={
//               <Route redirectTo="/auth/:id" component={<AuthPage />}>
//                 {/* <Route index element={<HomePage />} /> */}
//                 <Route path="/home" element={<PrivateRoute redirectTo="/welcome" component={<p>Hello User</p>} />}>
//                   <Route index element={<HomePage />} />
//                 </Route>
//               </Route>
//             }
//           />
//         <Route path="/auth/:id" element={<AuthPage />} />
//           {/* <Route path="*" element={<WelcomePage />} /> */}
//         </Routes>
//         {/* </Container> */}
//       </Suspense>
//     </>
//   );
// };