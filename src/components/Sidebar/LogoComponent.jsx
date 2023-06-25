import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import BoltSharpIcon from '@mui/icons-material/BoltSharp';

const LogoComponent = () => {
  return (
    <div>
      <Toolbar>
        <IconButton>
          <BoltSharpIcon />
        </IconButton>
        <Typography>Task Pro</Typography>
      </Toolbar>
    </div>
  );
};

export default LogoComponent;
