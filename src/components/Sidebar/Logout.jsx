import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Logout = () => {
  return (
    <Box sx={{ pb: 3 }}>
      <Button
        variant="text"
        sx={{
          textTransform: 'none',
          color: '#ffffff',
          p: 0,
          fontSize: { xs: 14, md: 16 },
          fontWeight: 500,
          lineHeight: 1.5,
        }}
      >
        <ExitToAppIcon sx={{ mr: 1.75, color: 'var(--iconLogOutColor)' }} />
        Log out
      </Button>
    </Box>
  );
};

export default Logout;
