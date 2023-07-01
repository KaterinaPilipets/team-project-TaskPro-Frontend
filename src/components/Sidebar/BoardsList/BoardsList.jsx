import { useState, useEffect } from 'react';
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
import { fetchBoardsList, deleteBoard } from 'services/boardslist-services';
import icon from 'sourse/sprite.svg';
import { useToggleModal } from 'hooks';
import EditBoardModal from '../EditBoardModal';

const BoardsList = () => {
  const [selectedBoardId, setSelectedBoardId] = useState('');
  const { open, close, isOpen } = useToggleModal();

  const dispatch = useDispatch();
  const boards = useSelector(state => state.boardsList.items);

  useEffect(() => {
    dispatch(fetchBoardsList());
  }, [dispatch]);

  const openEditModal = id => {
    setSelectedBoardId(id);
    open();
  };

  const handleDelete = id => dispatch(deleteBoard(id));

  return (
    <Container>
      <List>
        {boards.map(board => (
          <ListItem key={board._id}>
            <ListItemButton to={board._id}>
              <BoardIconContainer>
                <Svg>
                  <use xlinkHref={`${icon}#${board.icon}`} />
                </Svg>
              </BoardIconContainer>
              <BoardTitle>{board.title}</BoardTitle>

              <ActionsContainer className="buttons">
                <ActionButton marginRight>
                  <ActionButtonIcon onClick={() => openEditModal(board._id)}>
                    <use xlinkHref={`${icon}#icon-pencil`} />
                  </ActionButtonIcon>
                </ActionButton>
                <ActionButton>
                  <ActionButtonIcon onClick={() => handleDelete(board._id)}>
                    <use xlinkHref={`${icon}#icon-trash`} />
                  </ActionButtonIcon>
                </ActionButton>
              </ActionsContainer>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {isOpen && <EditBoardModal onClose={close} id={selectedBoardId} />}
    </Container>
  );
};

export default BoardsList;
