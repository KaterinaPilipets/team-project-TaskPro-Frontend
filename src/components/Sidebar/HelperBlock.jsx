import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HelpOutlineSharpIcon from '@mui/icons-material/HelpOutlineSharp';

const HelperBlock = () => {
  return (
    <Box sx={{ mt: 'auto' }}>
      <Box sx={{ mx: 3, p: 2.5, borderRadius: 1, mb: 3, background: '#ccc' }}>
        <Typography sx={{ mb: 2.25 }}>
          If you need help with{' '}
          <span style={{ color: '#5255BC' }}>TaskPro</span>, check out our
          support resources or reach out to our customer support team.
        </Typography>
        <Button sx={{ p: 0 }}>
          <HelpOutlineSharpIcon sx={{ mr: 1 }} />
          Need help?
        </Button>
      </Box>
    </Box>
  );
};

export default HelperBlock;
