import { Outlet } from 'react-router-dom';

import { Container } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <div>Sidebar</div>
      <div>
        <div>Header</div>
        <Outlet />
      </div>
    </Container>
  );
};
