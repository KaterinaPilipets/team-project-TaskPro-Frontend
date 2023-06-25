import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Logout = () => {
  return (
    <Box sx={{ pb: 3, px: 3 }}>
      <Button
        href="#text-buttons"
        variant="text"
        sx={{
          color: '#000',
          p: 0,
        }}
      >
        <ExitToAppIcon sx={{ mr: 1.75 }} />
        Log out
      </Button>
    </Box>
  );
};

export default Logout;
