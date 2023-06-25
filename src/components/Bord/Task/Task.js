import {
  ListItem,
  Span,
  TextHidden,
  Title,
  SubTitle,
  SubText,
  Wrap,
} from './Task.styled';
export const Task = ({ task }) => {
  const { name, discription, priority, deadline } = task;

  return (
    <ListItem>
      <Title>{name}</Title>
      <TextHidden>{discription}</TextHidden>
      <Span />
      <Wrap>
        <div>
          <SubTitle>Priority</SubTitle>
          <SubText>{priority}</SubText>
        </div>
        <div>
          <SubTitle>Deadline</SubTitle>
          <SubText>{deadline}</SubText>
        </div>
      </Wrap>
    </ListItem>
  );
};
