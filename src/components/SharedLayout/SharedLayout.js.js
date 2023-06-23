import { Outlet } from "react-router-dom";

import { Container } from "../App.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <SideBar />
      <Outlet />
    </Container>
  );
};
