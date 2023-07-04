import { format } from 'date-fns';
import { EditPanelCard } from 'components/EditPanelCard/EditPanelCard';
// import TaskCalendar from '../TaskCalendar/TaskCalendar';
// import { TaskInputDate } from '../TaskCalendar/TaskInputDate';

import {
  ListItem,
  Span,
  TextHidden,
  Title,
  SubTitle,
  SubText,
  Wrap,
  PriorityWrapper,
  PriorityIndicator,
} from './Task.styled';

import { getPriorityStyles } from 'helpers';

export const Task = ({ task }) => {
  const { title, description, label, deadline, _id: idCard } = task;

  const priorityStyles = getPriorityStyles(label);
  const formatedDeadline = format(new Date(deadline), 'dd/MM/yyyy');

  //  const [showDedline, setshowDedline] = useState(deadline);
  return (
    <ListItem color={priorityStyles.color}>
      <Title>{title}</Title>
      <TextHidden>{description}</TextHidden>
      <Span />
      <Wrap>
        <div>
          <SubTitle>Priority</SubTitle>
          <PriorityWrapper>
            <PriorityIndicator color={priorityStyles.color} />
            <SubText>{priorityStyles.labelText}</SubText>
          </PriorityWrapper>
        </div>
        <div>
          <SubTitle>Deadline</SubTitle>
          <SubText>{formatedDeadline}</SubText>
        </div>
        {/* {console.log(idCard)} */}

        <EditPanelCard id={idCard} deadline={deadline} />
      </Wrap>
    </ListItem>
  );
};
