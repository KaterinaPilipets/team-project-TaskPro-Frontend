import { useState } from 'react';
import  CardModal  from 'components/CardModal';

import icon from '../../sourse/sprite.svg';
import { Wrap } from './EditPanelCard.Styled';
import { SvgBtn } from 'components/SvgBtn/SvgBtn';
import { useToggleModal } from 'hooks';
import { useDispatch } from 'react-redux';
import { deleteTask} from 'services/board-servises';

export const EditPanelCard = ({ id }) => {
  const { isOpen, close, open } = useToggleModal();
  const [setErrorMessage] = useState(null);
  // const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(deleteTask(id));
    // сохранить в стейт /перерендерить страницу
    close();
  };
  const onSubmit = async (value, { setSubmitting }) => {
    setSubmitting(true);
    try {
      // dispatch(editTask({ value, id }));
      close();
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <>
      <Wrap>
        <svg width="16" height="16">
          <use xlinkHref={`${icon}#${'icon-bell'}`} />
        </svg>
        <SvgBtn idIcon={'icon-move'} onClick={() => {}} />
        <SvgBtn idIcon={'icon-pencil'} onClick={open} />
        <SvgBtn idIcon={'icon-trash'} onClick={onDelete} />
        {isOpen && <CardModal isOpen={isOpen} onClose={close} handleSubmit={onSubmit} operationName={"Edit"}/>}
      </Wrap>
    </>
  );
};
