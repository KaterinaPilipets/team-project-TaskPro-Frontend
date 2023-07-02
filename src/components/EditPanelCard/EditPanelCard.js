import { Modal } from 'components/Modal';
// import { useState } from 'react';
import icon from '../../sourse/sprite.svg';
import { Wrap } from './EditPanelCard.Styled';
import { SvgBtn } from 'components/SvgBtn/SvgBtn';
import { useToggleModal } from 'hooks';
import { useDispatch } from 'react-redux';
import { deleteCard } from 'services/board-servises';

export const EditPanelCard = ({ id }) => {
  console.log(id);
  const { isOpen, close, open } = useToggleModal();
  // const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const onDelete = id => {
    console.log(id);
    dispatch(deleteCard({ id }));
    // сохранить в стейт /перерендерить страницу
    close();
  };
  return (
    <>
      <Wrap>
        <svg width="16" height="16">
          <use xlinkHref={`${icon}#${'icon-bell'}`} />
        </svg>
        <SvgBtn idIcon={'icon-move'} onClick={() => {}} />
        <SvgBtn idIcon={'icon-pencil'} onClick={open} />
        <SvgBtn idIcon={'icon-trash'} onClick={() => onDelete(id)} />
        {isOpen && <Modal onClose={close}>"edit card"</Modal>}
      </Wrap>
    </>
  );
};
