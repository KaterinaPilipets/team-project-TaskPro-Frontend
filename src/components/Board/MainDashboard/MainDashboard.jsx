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
const filter = '';

export const MainDashboard = () => {
  const { isOpen, close, open } = useToggleModal();
  let result = useSelector(board);

  const filteredCards = result.cards.filter(card => {
    if (filter === '') {
      return result.cards;
    }
    return card.label === filter;
  });

  return (
    <>
      {/* render if don't have board: */}
      {/* {!result && (
        <div
          style={{
            margin: '281px auto 349px auto',
            width: 486,
            height: 72,
            textAlign: 'center',
            fontSize: '14px',
          }}
        >
          <>
            <p>
              Before starting your project, it is essential{' '}
              <a href="#1" style={{ color: '#BEDBB0' }}>
                to create a board
              </a>{' '}
              to visualize and track all the necessary tasks and milestones.
              This board serves as a powerful tool to organize the workflow and
              ensure effective collaboration among team members.
            </p>
          </>
        </div>
      )} */}
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
          {/* <button
            type="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: 'auto auto 568px 24px',
              padding: '14px 78px',
              width: 334,
              height: 56,
              backgroundColor: 'gray',
              borderRadius: 8,
              fontSize: 14,
            }}
          >
            <svg
              width="14"
              height="14"
              style={{
                marginRight: 8,
                // fill: 'black',
                // textAlign: 'center',
              }}
            >
              <use xlinkHref={`${icon}#icon-plus`}></use>
            </svg>
            Add another column
            </button> */}

          {/* <ButtonPrimary onClick={open} type="button">
              Add another column
            </ButtonPrimary> */}

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
