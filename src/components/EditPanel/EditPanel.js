import icon from '../../sourse/sprite.svg';
import { Modal } from 'components/Modal';
import { useState } from 'react';
import { Btn } from './EditPanel.Styled';
import { Wrap } from 'components/Board/Task/Task.styled';

export const SvgBtn = ({ idIcon, onClick }) => {
  return (
    <>
      <Btn onClick={onClick}>
        <svg width="16" height="16">
          <use xlinkHref={`${icon}#${idIcon}`} />
        </svg>
      </Btn>
    </>
  );
};

export const EditPanel = ({ id }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Wrap>
        <SvgBtn idIcon={'move'} onClick={() => alert('move')} />
        <SvgBtn idIcon={'icon-pencil'} onClick={() => setShowModal(true)} />
        <SvgBtn idIcon={'icon-trash'} onClick={() => alert('мусорка')} />
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>"edit card"</Modal>
        )}
      </Wrap>
    </>
  );
};
