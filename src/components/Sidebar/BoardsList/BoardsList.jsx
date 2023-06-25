import * as React from 'react';
import {
  Container,
  List,
  ListItem,
  ListItemButton,
  BoardIconContainer,
  BoardIcon,
  BoardTitle,
  ActionsContainer,
  ActionButton,
  EditIcon,
  DeleteIcon,
} from './BoardsList.styled';

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
    <Container>
      <List>
        {BOARDS.map(board => (
          <ListItem key={board.id}>
            <ListItemButton to={board.id}>
              <BoardIconContainer>
                <BoardIcon />
              </BoardIconContainer>
              <BoardTitle>{board.name}</BoardTitle>

              <ActionsContainer className="buttons">
                <ActionButton marginRight>
                  <EditIcon />
                </ActionButton>
                <ActionButton>
                  <DeleteIcon />
                </ActionButton>
              </ActionsContainer>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default BoardsList;
