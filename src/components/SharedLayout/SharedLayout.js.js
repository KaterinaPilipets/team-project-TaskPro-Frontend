import { Outlet } from 'react-router-dom';

import { Container } from './SharedLayout.styled';

import Sidebar from '../Sidebar';
import { Header } from 'components/Header';

export const SharedLayout = () => {
  return (
    <Container>
      <div>
        <Sidebar />
      </div>

      <div style={{ width: '100%' }}>
        <Header />
        <Outlet />
      </div>
    </Container>
  );
};
