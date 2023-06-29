import { useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalBoardFilters } from './ModalBoardFilters.jsx';
import icon from '../../sourse/sprite.svg';

export const ButtonBoardFilters = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: 14,
          // justifySelf: 'right',
          // textAlign: 'center',
          // marginLeft: 'auto',
          // marginRight: 24,
        }}
      >
        <svg
          width="16"
          height="16"
          style={{
            marginRight: 8,
            // fill: 'black',
            // textAlign: 'center',
          }}
        >
          <use xlinkHref={`${icon}#icon-filter`}></use>
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
