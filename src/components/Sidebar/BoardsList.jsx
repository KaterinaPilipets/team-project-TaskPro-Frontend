import * as React from 'react';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GridViewIcon from '@mui/icons-material/GridView';

const BOARDS = [
  { id: '1', name: 'Project office', icon: '' },
  { id: '2', name: 'Neon Light Project', icon: '' },
  { id: '3', name: 'Neon Light Project ghjkkllfhbjjn', icon: '' },
  { id: '4', name: 'Neon Light', icon: '' },
  { id: '5', name: 'Light Project', icon: '' },
  { id: '6', name: 'eonProject', icon: '' },
  { id: '7', name: 'Neon Light Project', icon: '' },
  { id: '8', name: 'Neon Light Project', icon: '' },
  { id: '9', name: 'Neon Light Project', icon: '' },
  { id: '10', name: 'Neon Light Project', icon: '' },
];

const BoardsList = () => {
  return (
    <Box sx={{ overflow: 'auto', mb: 3 }}>
      <List>
        {BOARDS.map((board, index) => (
          <ListItem
            key={board.id}
            disablePadding
            sx={{
              color: 'var(--sidebarSecondaryTextColor)',
              '&:hover': {
                color: 'var(--sidebarPrimaryTextColor)',
              },
              '&:hover .buttons': {
                display: 'flex',
              },
            }}
          >
            <ListItemButton
              component={NavLink}
              to={board.id}
              sx={{
                py: 2.5,
                px: {
                  sx: 1.75,
                  md: 3,
                },
              }}
            >
              <ListItemIcon
                sx={{ p: 0, mr: 1, minWidth: 18, color: 'inherit' }}
              >
                <GridViewIcon sx={{ fontSize: 18 }} />
              </ListItemIcon>
              <ListItemText
                primary={board.name}
                primaryTypographyProps={{
                  noWrap: true,
                  sx: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: 1.5,
                    letterSpacing: '-0.02em',
                  },
                }}
                sx={{ my: 0 }}
              />

              <Box className="buttons" sx={{ display: 'none' }}>
                <IconButton
                  sx={{
                    p: 0,
                    mr: 1,
                    color: 'var(--sidebarSecondaryTextColor)',
                  }}
                >
                  <CreateTwoToneIcon sx={{ fontSize: 16 }} />
                </IconButton>
                <IconButton
                  sx={{ p: 0, color: 'var(--sidebarSecondaryTextColor)' }}
                >
                  <DeleteTwoToneIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default BoardsList;
