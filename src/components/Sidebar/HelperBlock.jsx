import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HelpOutlineSharpIcon from '@mui/icons-material/HelpOutlineSharp';

const HelperBlock = () => {
  return (
    <Box
      sx={{
        p: 2.5,
        borderRadius: 1,
        mb: 3,
        background: 'var(--helpBgColor)',
        color: 'var(--helpText)',
      }}
    >
      <Typography
        sx={{
          mb: 2.25,
          fontSize: 14,
          lineHeight: 1.429,
          letterSpacing: '-0.02em',
        }}
      >
        If you need help with{' '}
        <Typography
          sx={{ color: 'var(--helpTextAccentColor)' }}
          component="span"
        >
          TaskPro
        </Typography>
        , check out our support resources or reach out to our customer support
        team.
      </Typography>
      <Button
        sx={{
          p: 0,
          textTransform: 'none',
          fontSize: 12,
          fontWeight: 500,
          lineHeight: 1.5,
          letterSpacing: '-0.02em',
        }}
        color="inherit"
      >
        <HelpOutlineSharpIcon sx={{ mr: 1 }} />
        Need help?
      </Button>
    </Box>
  );
};

export default HelperBlock;
