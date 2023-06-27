import { useState } from 'react';

export const useToggleModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return { open, close, toggle, isOpen };
};
