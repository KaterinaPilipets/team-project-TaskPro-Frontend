import * as React from 'react';
import Typography from '@mui/material/Typography';

const TitleBoard = () => {
  return (
    <div>
      <Typography
        color="textSecondary"
        sx={{
          fontSize: 12,
          lineHeight: 1.5,
          letterSpacing: '-0.02em',
          py: 1,
          color: 'var( --inputText)',
        }}
      >
        My boards
      </Typography>
    </div>
  );
};

export default TitleBoard;
