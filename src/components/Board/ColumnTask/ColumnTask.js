import { useState } from 'react';
// import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary';
import { useDispatch } from 'react-redux';
import { Task } from '../Task/Task';
import {
  ButtonPrimaryStyled,
  Column,
  HeaderColumn,
  List,
} from './ColumnTask.Styled';
import { useToggleModal } from '../../../hooks';
import CardModal from 'components/CardModal';
import { EditPanelColumn } from 'components/EditPanelColumn/EditPanelColumn';
import { addTask } from 'services/board-servises';

export const ColumnTask = ({ tasksArray, titleColumn, id }) => {
  const { open, close, isOpen } = useToggleModal();
  const [setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const onSubmit = async (value, { setSubmitting }) => {
      setSubmitting(true);
      try {
        dispatch(addTask({ value, id }));
        close();
      } catch (error) {
        setErrorMessage(error.response.data.message);
      }
    };

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


      {isOpen && <CardModal id={id} isOpen={isOpen} onClose={close} handleSubmit={onSubmit} operationName={"Add"}  />}

    </Column>
  );
};
