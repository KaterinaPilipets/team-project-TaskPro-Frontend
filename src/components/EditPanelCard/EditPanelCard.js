import { Modal } from 'components/Modal';
import { useState } from 'react';
import icon from '../../sourse/sprite.svg';
import {
  Wrap,
  DeadlineIcon,
  DeadlineWrapper,
  DeadlineIconBlur,
  BtnWrapper,
} from './EditPanelCard.Styled';
import { SvgBtn } from 'components/SvgBtn/SvgBtn';
import { useToggleModal } from 'hooks';
import { useDispatch } from 'react-redux';
import { deleteTask } from 'services/board-servises';
import { differenceInHours } from 'date-fns';
import ColumnChanger from '../Board/ColumnChanger/ColumnChanger';

export const EditPanelCard = ({ id, deadline }) => {
  const { isOpen, close, open } = useToggleModal();
  const [showColumnChanger, setShowColumnChanger] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(deleteTask(id));
    // сохранить в стейт /перерендерить страницу
    close();
  };

  const is24Hours = differenceInHours(new Date(deadline), Date.now()) < 24;
  return (
    <>
      <Wrap>
        {is24Hours && (
          <DeadlineWrapper>
            <DeadlineIconBlur />
            <DeadlineIcon width="16" height="16">
              <use xlinkHref={`${icon}#${'icon-bell'}`} />
            </DeadlineIcon>
          </DeadlineWrapper>
        )}
        <BtnWrapper>
          {' '}
          <SvgBtn
            idIcon={'icon-move'}
            onClick={() => setShowColumnChanger(true)}
          />
          <SvgBtn idIcon={'icon-pencil'} onClick={open} />
          <SvgBtn idIcon={'icon-trash'} onClick={onDelete} />
          {showColumnChanger && (
          <ColumnChanger onClose={() => setShowColumnChanger(false)} />
        )}
        </BtnWrapper>

        {isOpen && <Modal onClose={close}>"edit card"</Modal>}
        
      </Wrap>
    </>
  );
};
