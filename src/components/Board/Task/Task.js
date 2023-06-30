import { EditPanel } from 'components/EditPanel/EditPanel';
import icon from '../../../sourse/sprite.svg';

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
        <svg width="16" height="16">
          <use xlinkHref={`${icon}#${'bell'}`} />
        </svg>
        <EditPanel idCard={idCard} />
      </Wrap>
    </ListItem>
  );
};
