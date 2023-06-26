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
import { useSelector, useDispatch } from 'react-redux';
import { fetchBoardsList } from 'services/boardslist-services';

const BoardsList = () => {
  const dispatch = useDispatch();
  const boards = useSelector(state => state.boardsList.items);

  React.useEffect(() => {
    dispatch(fetchBoardsList());
  }, []);

  return (
    <Container>
      <List>
        {boards.map(board => (
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
