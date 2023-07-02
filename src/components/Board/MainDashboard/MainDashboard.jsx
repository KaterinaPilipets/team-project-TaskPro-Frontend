import { ColumnTask } from 'components/Board/ColumnTask/ColumnTask';
import { ButtonPrimary } from 'components/ButtonPrimary';
import { useToggleModal } from 'hooks';
import { AddColumnModal } from '../AddColumnModal';
import { Modal } from 'components/Modal';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { board } from 'redux/board/boardSelector';

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
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
          }}
        >
          <ul
            style={{
              display: 'flex',
              gap: 18,
              marginLeft: 24,
            }}
          >
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
          </ul>
          <div
            style={{
              // display: 'flex',
              // alignItems: 'center',
              margin: 'auto auto 568px 24px',
              // padding: '14px 78px',
              width: 334,
              height: 56,
            }}
          >
            <ButtonPrimary onClick={open} type="button">
              Add another column
            </ButtonPrimary>
          </div>
          {isOpen && (
            <Modal onClose={close}>
              <AddColumnModal onClose={close} />
            </Modal>
          )}
        </div>
      )}
    </div>
  );
};
