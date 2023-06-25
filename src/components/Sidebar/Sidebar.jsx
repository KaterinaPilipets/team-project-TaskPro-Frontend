import * as React from 'react';
import Logout from './Logout';
import LogoComponent from './LogoComponent';
import TitleBoard from './TitleBoard';
import AddBoard from './AddBoard';
import BoardsList from './BoardsList';
import HelperBlock from './HelperBlock';
import { SidebarContainer, SidebarContent } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarContent>
        <LogoComponent />
        <TitleBoard />
        <AddBoard />
      </SidebarContent>

      <BoardsList />

      <SidebarContent marginTop>
        <HelperBlock />
        <Logout />
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
