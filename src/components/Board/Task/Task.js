import { EditPanelCard } from 'components/EditPanelCard/EditPanelCard';

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
  const { title, description, label, deadline, _id: idCard } = task;
  //  const [showDedline, setshowDedline] = useState(deadline);
  return (
    <ListItem>
      <Title>{title}</Title>
      <TextHidden>{description}</TextHidden>
      <Span />
      <Wrap>
        <div>
          <SubTitle>Priority</SubTitle>
          <SubText>{label}</SubText>
        </div>
        <div>
          <SubTitle>Deadline</SubTitle>
          <SubText>{deadline}</SubText>
        </div>

        <EditPanelCard idCard={idCard} />
      </Wrap>
    </ListItem>
  );
};
