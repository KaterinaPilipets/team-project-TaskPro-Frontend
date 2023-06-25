import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';

const AddBoard = () => {
  return (
    <div>
      <Divider sx={{ mx: { xs: 1.75, md: 3 } }} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: { xs: 1.75, md: 3 },
          py: 1.75,
        }}
      >
        <Typography sx={{ width: 72, fontSize: 14 }}>
          Create a new board
        </Typography>
        <IconButton sx={{ ml: 'auto' }}>
          <AddIcon />
        </IconButton>
      </Box>
      <Divider sx={{ mx: { xs: 1.75, md: 3 } }} />
    </div>
  );
};

export default AddBoard;
