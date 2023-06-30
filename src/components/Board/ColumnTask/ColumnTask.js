// import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary';
import { Task } from '../Task/Task';
import {
  ButtonPrimaryStyled,
  Column,
  HeaderColumn,
  List,
} from './ColumnTask.Styled';
import { useToggleModal } from '../../../hooks';
import { Modal } from 'components/Modal';
import { EditPanelColumn } from 'components/EditPanelColumn/EditPanelColumn';

export const ColumnTask = ({ tasksArray, titleColumn }) => {
  const { open, close, isOpen } = useToggleModal();

  return (
    <Column>
      <HeaderColumn>
        <p>{titleColumn}</p>
        <EditPanelColumn />
      </HeaderColumn>
      <List>
        {tasksArray.map(task => {
          return <Task key={task._id} task={task} />;
        })}
      </List>

      <ButtonPrimaryStyled onClick={open}>Add another card</ButtonPrimaryStyled>

      {isOpen && (
        <Modal onClose={close}>
          <p>Add card</p>
        </Modal>
      )}
    </Column>
  );
};
