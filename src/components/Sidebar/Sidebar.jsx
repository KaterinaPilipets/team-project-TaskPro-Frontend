import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from 'redux/sidebar/sidebarSlice';

import Logout from './Logout';
import LogoComponent from './LogoComponent';
import TitleBoard from './TitleBoard';
import AddBoard from './AddBoard';
import BoardsList from './BoardsList';
import HelperBlock from './HelperBlock';
import {
  StyledOverlay,
  SidebarContainer,
  SidebarContent,
} from './Sidebar.styled';

const Sidebar = () => {
  const isOpen = useSelector(state => state.sidebar.isOpen);
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <>
      {isOpen && <StyledOverlay onClick={handleToggleSidebar} />}
      <SidebarContainer className={isOpen ? 'open' : ''}>
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
    </>
  );
};

export default Sidebar;
