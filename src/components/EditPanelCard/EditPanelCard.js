import { EditCard } from 'components/EditCard';

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

import { deleteCard } from 'services/board-servises';
import { differenceInHours } from 'date-fns';
import ColumnChanger from '../Board/ColumnChanger/ColumnChanger';
import { useState } from 'react';

export const EditPanelCard = ({ id, deadline }) => {
  const { isOpen, close, open } = useToggleModal();

  const [showColumnChanger, setShowColumnChanger] = useState(false);

  // const [setErrorMessage] = useState(null);

  // const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(deleteCard({ id }));
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
          <SvgBtn
            idIcon={'icon-move'}
            onClick={() => setShowColumnChanger(true)}
          />
          <SvgBtn idIcon={'icon-pencil'} onClick={open} />
          <SvgBtn idIcon={'icon-trash'} onClick={() => onDelete(id)} />
          {showColumnChanger && (
            <ColumnChanger onClose={() => setShowColumnChanger(false)} />
          )}
        </BtnWrapper>

        {isOpen && (
          <EditCard
            id={id}
            isOpen={isOpen}
            onClose={close}
            operationName={'Edit'}
          />
        )}
      </Wrap>
    </>
  );
};
