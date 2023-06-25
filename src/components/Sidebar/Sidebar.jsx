import * as React from 'react';
import Box from '@mui/material/Box';
import Logout from './Logout';
import LogoComponent from './LogoComponent';
import TitleBoard from './TitleBoard';
import AddBoard from './AddBoard';
import BoardsList from './BoardsList';
import HelperBlock from './HelperBlock';

const Sidebar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        maxWidth: 260,
      }}
    >
      <LogoComponent />
      <TitleBoard />
      <AddBoard />
      <BoardsList />
      <HelperBlock />
      <Logout />
    </Box>
  );
};

export default Sidebar;
