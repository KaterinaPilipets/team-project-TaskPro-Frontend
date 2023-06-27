import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalBoardFilters from './ModalBoardFilters.jsx';

export const ButtonBoardFilters = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <svg width="16" height="16">
          <use href="../../sourse/sprite.svg#icon-filter"></use>
        </svg>
        Filters
      </button>
      {showModal &&
        createPortal(
          <ModalBoardFilters onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
};
