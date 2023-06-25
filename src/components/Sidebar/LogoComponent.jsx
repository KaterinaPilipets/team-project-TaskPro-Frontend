import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BoltSharpIcon from '@mui/icons-material/BoltSharp';

const LogoComponent = () => {
  return (
    <div>
      <Toolbar
        disableGutters
        sx={{
          color: 'var(--logoColor)',
          mb: 7.5,
        }}
      >
        <Box
          sx={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: 1,
            color: 'var(--logoIconFill)',
            background: 'var(--logoBgColor)',
          }}
        >
          <BoltSharpIcon />
        </Box>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 600,
            lineHeight: 1.5,
            letterSpacing: '-0.04em',
          }}
        >
          Task Pro
        </Typography>
      </Toolbar>
    </div>
  );
};

export default LogoComponent;
