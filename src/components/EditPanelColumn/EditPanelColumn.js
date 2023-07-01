import { Modal } from 'components/Modal';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteColumn } from 'services/board-servises';
import { Wrap } from './EditPanelColumn.Styled';
import { SvgBtn } from 'components/SvgBtn/SvgBtn';
import { EditColumnModal } from 'components/Board/EditColumnModal';
import { useToggleModal } from 'hooks';

export const EditPanelColumn = ({ id }) => {
  const { isOpen, close, open } = useToggleModal();
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(deleteColumn(id));
    // сохранить в стейт /перерендерить страницу
    // close();
  };
  return (
    <>
      <Wrap>
        <SvgBtn idIcon={'icon-pencil'} onClick={open} />
        <SvgBtn idIcon={'icon-trash'} onClick={() => onDelete(id)} />
        {isOpen && (
          <Modal onClose={close}>
            <EditColumnModal id={id} />
          </Modal>
        )}
      </Wrap>
    </>
  );
};
