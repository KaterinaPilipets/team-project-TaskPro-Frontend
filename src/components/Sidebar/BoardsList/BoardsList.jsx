import * as React from 'react';
import {
  Container,
  List,
  ListItem,
  ListItemButton,
  BoardIconContainer,
  BoardTitle,
  ActionsContainer,
  ActionButton,
  ActionButtonIcon,
  Svg,
} from './BoardsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBoardsList } from 'services/boardslist-services';
import icon from 'sourse/sprite.svg';

const BoardsList = () => {
  const dispatch = useDispatch();
  const boards = useSelector(state => state.boardsList.items);

  React.useEffect(() => {
    dispatch(fetchBoardsList());
  }, [dispatch]);

  return (
    <Container>
      <List>
        {boards.map(board => (
          <ListItem key={board.id || board._id}>
            <ListItemButton to={board.id || board._id}>
              <BoardIconContainer>
                <Svg>
                  <use xlinkHref={`${icon}#${board.icon}`} />
                </Svg>
              </BoardIconContainer>
              <BoardTitle>{board.title}</BoardTitle>

              <ActionsContainer className="buttons">
                <ActionButton marginRight>
                  <ActionButtonIcon>
                    <use xlinkHref={`${icon}#icon-pencil`} />
                  </ActionButtonIcon>
                </ActionButton>
                <ActionButton>
                  <ActionButtonIcon>
                    <use xlinkHref={`${icon}#icon-trash`} />
                  </ActionButtonIcon>
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
