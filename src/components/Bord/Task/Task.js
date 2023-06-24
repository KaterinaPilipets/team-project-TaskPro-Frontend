import { ListItem, TextHidden } from './Task.styled';
export const Task = ({ task }) => {
  const { name, discription, priority, deadline } = task;

  return (
    <ListItem>
      <p>{name}</p>
      <TextHidden>{discription}</TextHidden>

      <p>Priority</p>
      <p>{priority}</p>
      <p>Deadline</p>
      <p>{deadline}</p>
    </ListItem>
  );
};
