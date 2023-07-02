import { useDispatch, useSelector } from 'react-redux';
import AddBoardModal from '../AddBoardModal';
import { Container, Text, AddButton, AddButtonIcon } from './AddBoard.styled';
import {
  closeAddBoardModal,
  openAddBoardModal,
} from 'redux/sidebar/sidebarSlice';

const AddBoard = () => {
  const dispatch = useDispatch();
  const modalOpen = useSelector(state => state.sidebar.showAddBoardModal);

  const open = () => {
    dispatch(openAddBoardModal());
  };

  const close = () => {
    dispatch(closeAddBoardModal());
  };

  return (
    <Container>
      <Text>Create a new board</Text>
      <AddButton onClick={open}>
        <AddButtonIcon />
      </AddButton>

      {modalOpen && <AddBoardModal onClose={close} />}
    </Container>
  );
};

export default AddBoard;
