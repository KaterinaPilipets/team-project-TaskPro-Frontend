import { Modal } from 'components/Modal';
import { useState } from 'react';

import { Wrap } from './EditPanelColumn.Styled';
import { SvgBtn } from 'components/SvgBtn/SvgBtn';

export const EditPanelColumn = ({ id }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Wrap>
        <SvgBtn idIcon={'icon-pencil'} onClick={() => setShowModal(true)} />
        <SvgBtn idIcon={'icon-trash'} onClick={() => alert('мусорка')} />
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>EditColumnModal</Modal>
        )}
      </Wrap>
    </>
  );
};
