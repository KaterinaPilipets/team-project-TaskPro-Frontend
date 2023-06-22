// import { Suspense, lazy, useEffect } from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'styles';
// import { useDispatch, useSelector } from 'react-redux';

const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
export const App = () => {
  // const dispatch = useDispatch();
  //  const isRefreshing = useSelector(authSelector.getIsRefreshing);

  //  useEffect(() => {
  //    dispatch(authOperation.refreshCurrentUser());
  //  }, [dispatch]);
  return (
    <>
      <GlobalStyle />
      {/* <Suspense fallback={<p>Loading...</p>}> */}
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="welcome" element={<WelcomePage />} />
        <Route path="auth/:id" element={<AuthPage />} />
        <Route path="home" element={<HomePage />} />
      </Routes>
      {/* </Suspense> */}
    </>
  );
};
