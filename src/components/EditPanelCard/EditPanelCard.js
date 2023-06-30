import { Modal } from 'components/Modal';
import { useState } from 'react';
import icon from '../../sourse/sprite.svg';
import { Wrap } from './EditPanelCard.Styled';
import { SvgBtn } from 'components/SvgBtn/SvgBtn';

export const EditPanelCard = ({ id }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Wrap>
        <svg width="16" height="16">
          <use xlinkHref={`${icon}#${'icon-bell'}`} />
        </svg>
        <SvgBtn idIcon={'icon-move'} onClick={() => alert('move')} />
        <SvgBtn idIcon={'icon-pencil'} onClick={() => setShowModal(true)} />
        <SvgBtn idIcon={'icon-trash'} onClick={() => alert('мусорка')} />
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>"edit card"</Modal>
        )}
      </Wrap>
    </>
  );
};
