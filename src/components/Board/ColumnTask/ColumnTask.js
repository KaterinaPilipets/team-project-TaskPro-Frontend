import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary';
import { Task } from '../Task/Task';
import { Column, HeaderColumn, List, Wrap } from './ColumnTask.Styled';
import { useToggleModal } from '../../../hooks';
import { Modal } from 'components/Modal';

export const ColumnTask = ({ tasksArray, titleColumn }) => {
  const { open, close, isOpen } = useToggleModal();
  //   console.log(tasksArray);
  return (
    <Column>
      <HeaderColumn>
        <p>{titleColumn}</p>
      </HeaderColumn>

      <List>
        {tasksArray.map(task => {
          // console.log(task);
          return <Task key={task._id} task={task} />;
        })}
      </List>
      <Wrap>
        <ButtonPrimary onClick={open}>Add another card</ButtonPrimary>
      </Wrap>
      {isOpen && (
        <Modal onClose={close}>
          <p>Add card</p>
        </Modal>
      )}
    </Column>
  );
};

// function ContactList() {
//   const filteredContacts = useSelector(selectFilteredContacts);
//   return (
//     <List>
//       {filteredContacts.map(({ id, name, number }) => (
//         <Contact key={id} id={id} name={name} number={number} />
//       ))}
//     </List>
//   );
// }
