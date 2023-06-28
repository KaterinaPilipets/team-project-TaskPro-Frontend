// import { SvgBtn } from 'components/EditPanel/EditPanel';
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
// const { open } = useToggleModal();
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
  const { title, description, label, deadline } = task;

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
        {/* <SvgBtn idIcon={'icon-pencil'} fn={open()} component={'bbbbggg'} /> */}
        {/* SvgBtn = ({(IdIcon, fn)}) */}
        {/* <EditPanel iconsEdit={EditPanelarray} /> */}
      </Wrap>
    </ListItem>
  );
};
