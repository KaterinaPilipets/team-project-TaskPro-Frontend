import { SvgBtn } from 'components/EditPanel/EditPanel';
import {
  ListItem,
  Span,
  TextHidden,
  Title,
  SubTitle,
  SubText,
  Wrap,
} from './Task.styled';
// import { useToggleModal } from '../../../hooks';
// import { Modal } from 'components/Modal';
// const { open, close, isOpen } = useToggleModal;
// const EditPanelarray = [
//   {
//     name: 'icon-circle-box',
//     fn: () => {},
//   },
//   {
//     name: 'icon-pencil',
//     fn: () => {},
//   },
//   {
//     name: 'icon-trash',
//     fn: () => {},
//   },
// ];
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
        <SvgBtn IdIcon={'icon-pencil'} />
        {/* SvgBtn = ({(IdIcon, fn)}) */}
        {/* <EditPanel iconsEdit={EditPanelarray} /> */}
      </Wrap>
    </ListItem>
  );
};
