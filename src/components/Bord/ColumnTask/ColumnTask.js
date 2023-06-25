// import { Button } from 'components/Button';
import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary';
import { Task } from '../Task/Task';
import { Column, HeaderColumn, List } from './ColumnTask.Styled';
export const ColumnTask = ({ tasksArray, titleColumn }) => {
  //   console.log(tasksArray);
  return (
    <Column>
      <HeaderColumn>
        <p>{titleColumn}</p>
      </HeaderColumn>

      <List>
        {tasksArray.map(task => {
          console.log(task);
          return <Task key={task.id} task={task} />;
        })}
      </List>
      {/* <Wrap> */}
      <ButtonPrimary>Add another card</ButtonPrimary>
      {/* </Wrap> */}
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
