import { ColumnTask } from 'components/Board/ColumnTask/ColumnTask';
import { useToggleModal } from 'hooks';
import { AddColumnModal } from '../AddColumnModal';
import { Modal } from 'components/Modal';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { board } from 'redux/board/boardSelector';
import {
  StyledButtonAddColumn,
  StyledIconAddColumn,
  StyledList,
  StyledMainContainer,
  StyledSvgAddColumn,
} from './MainDashboard.styled';
import icon from '../../../sourse/sprite.svg';

// receive filter from filter component
// const filter = '';

export const MainDashboard = ({ filter }) => {
  const { isOpen, close, open } = useToggleModal();
  let result = useSelector(board);

  const filteredCards = result.cards.filter(card => {
    if (filter === '') {
      return result.cards;
    }
    return card.label === filter;
  });

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        // alignItems: 'flex-start',
      }}
    >

      {/* render if have board: */}
      {result && (
        <StyledMainContainer>
          <StyledList>
            {result.columns.map(column => {
              const columnCards = filteredCards.filter(card => {
                return card.cardOwner === column._id;
              });
              return (
                <ColumnTask
                  key={column._id}
                  tasksArray={columnCards}
                  titleColumn={column.title}
                  id={column._id}
                />
              );
            })}

          </StyledList>
        

          <StyledButtonAddColumn type="button" onClick={open}>
            <StyledIconAddColumn>
              <StyledSvgAddColumn width="14" height="14">
                <use xlinkHref={`${icon}#icon-plus`} />
              </StyledSvgAddColumn>
            </StyledIconAddColumn>
            Add another colum
          </StyledButtonAddColumn>


          {isOpen && (
            <Modal onClose={close}>
              <AddColumnModal onClose={close} />
            </Modal>
          )}
        </StyledMainContainer>
      )}
    </>
  );
};
