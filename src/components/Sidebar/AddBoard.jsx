import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';

const AddBoard = () => {
  return (
    <div>
      <Divider sx={{ borderColor: 'var(--inputBorder)' }} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          py: 1.75,
        }}
      >
        <Typography
          sx={{
            width: 72,
            color: '#ffffff',
            fontSize: 14,
            fontWeight: 500,
            lineHeight: 1.5,
            letterSpacing: '-0.02em',
          }}
        >
          Create a new board
        </Typography>
        <Button
          disableRipple
          sx={{
            width: '40px',
            height: '36px',
            minWidth: 'auto',
            ml: 'auto',
            '&, &:hover': {
              backgroundColor: 'var(--buttonPlusBgColor)',
            },
          }}
        >
          <AddIcon sx={{ color: 'var(--buttonPlusFill)' }} />
        </Button>
      </Box>
      <Divider sx={{ borderColor: 'var(--inputBorder)' }} />
    </div>
  );
};

export default AddBoard;
