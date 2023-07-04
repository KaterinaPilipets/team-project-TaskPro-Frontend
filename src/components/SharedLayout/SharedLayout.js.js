import { Outlet } from 'react-router-dom';

import { Container } from './SharedLayout.styled';

import Sidebar from '../Sidebar';
import { Header } from 'components/Header';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getTheme } from 'redux/auth/authSelectors';
import 'react-toastify/dist/ReactToastify.css';

export const SharedLayout = () => {
  const theme = useSelector(getTheme);
  return (
    <Container>
      <div>
        <Sidebar />
      </div>

      <div style={{ width: '100%', position: 'relative' }}>
        <Header />
        <Outlet />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
      {/* Same as */}
      <ToastContainer />
    </Container>
  );
};
