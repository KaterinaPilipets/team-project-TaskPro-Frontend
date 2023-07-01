// import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary';
import { Task } from '../Task/Task';
import {
  ButtonPrimaryStyled,
  Column,
  HeaderColumn,
  List,
} from './ColumnTask.Styled';
import { useToggleModal } from '../../../hooks';
import CardModal from 'components/CardModal';
// import { Modal } from 'components/Modal';
import { EditPanelColumn } from 'components/EditPanelColumn/EditPanelColumn';

export const ColumnTask = ({ tasksArray, titleColumn, id }) => {
  const { open, close, isOpen } = useToggleModal();

  return (
    <Column>
      <HeaderColumn>
        <p>{titleColumn}</p>
        <EditPanelColumn id={id} />
      </HeaderColumn>
      <List>
        {tasksArray.map(task => {
          return <Task key={task._id} task={task} />;
        })}
      </List>

      <ButtonPrimaryStyled onClick={open}>Add another card</ButtonPrimaryStyled>

      {isOpen && <CardModal isOpen={isOpen} onClose={close} />}
    </Column>
  );
};
