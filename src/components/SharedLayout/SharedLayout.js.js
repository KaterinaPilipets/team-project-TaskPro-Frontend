import { Outlet } from "react-router-dom";

import { Container } from "../App.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <div>Header</div>
      <div>Sidebar</div>
      <Outlet />
    </Container>
  );
};
