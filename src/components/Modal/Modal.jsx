import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import icon from '../../sprite.svg';

// import PropTypes from "prop-types";

import {
  StyledModal,
  StyledOverlay,
  StyledCloseButton,
  Svg,
} from './Modal.styled';

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
        <StyledCloseButton type="button" onClick={onClose}>
          <Svg width="18" height="18">
            <use xlinkHref={`${url}#icon-close`} />
          </Svg>
        </StyledCloseButton>
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
