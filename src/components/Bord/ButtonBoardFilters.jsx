import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalBoardFilters from './ModalBoardFilters.js';

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

// сделать модалку с фильтром через портал

// export default function PortalExample() {
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <>
//       <button onClick={() => setShowModal(true)}>
//         Show modal using a portal
//       </button>
//       {showModal &&
//         createPortal(
//           <ModalContent onClose={() => setShowModal(false)} />,
//           document.body
//         )}
//     </>
//   );
// }
