import { useEffect } from 'react';
import { createPortal } from 'react-dom';

// import PropTypes from "prop-types";

import { StyledModal, StyledOverlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  const handleKeydown = ({ code }) => {
    if (code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      onClose();
    }
  };

  return createPortal(
    <StyledOverlay onClick={handleBackdropClick}>
      <StyledModal>
        <button type="button" onClick={onClose}>
          {/* PAST SVG  */}
          <svg width="18" height="18">
            <use href="../sprite.svg#close-black"></use>
          </svg>
        </button>
        {/* <span onClick={onClose}>x</span> */}
        {children}
      </StyledModal>
    </StyledOverlay>,
    modalRoot
  );
};

// Modal.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   children: PropTypes.node.isRequired,
// };
