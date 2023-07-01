import AddBoardModal from '../AddBoardModal';
import { Container, Text, AddButton, AddButtonIcon } from './AddBoard.styled';
import { useToggleModal } from 'hooks';

const AddBoard = () => {
  const { open, close, isOpen } = useToggleModal();

  return (
    <Container>
      <Text>Create a new board</Text>
      <AddButton onClick={open}>
        <AddButtonIcon />
      </AddButton>

      {isOpen && <AddBoardModal onClose={close} />}
    </Container>
  );
};

export default AddBoard;
