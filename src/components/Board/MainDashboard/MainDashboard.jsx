// import icon from '../../sourse/sprite.svg';
import { ColumnTask } from 'components/Board/ColumnTask/ColumnTask';
import { ButtonPrimary } from 'components/ButtonPrimary';
import { AddColumnModal } from 'components/Board/AddColumnModal';
// import { EditColumnModal } from './components/Board/EditColumnModal';
import { useToggleModal } from 'hooks';

// take result from selector

// const result = null;

const result = {
  columns: [
    {
      _id: '6499ce1761db2ad559ea7462',
      title: 'after-noon1',
      columnOwner: '649738732301f0d9412b3b25',
    },
    {
      _id: '649ac92bff119f22533e7909',
      title: 'Dddd',
      columnOwner: '649738732301f0d9412b3b25',
    },
    {
      _id: '649ac92bff119f22533e7111',
      title: 'Aaaa',
      columnOwner: '649738732301f0d9412b3b25',
    },
  ],
  cards: [
    {
      _id: '6499f64aa82d48b430dafa6a',
      title: 'test1',
      description: 'AAaaaa',
      label: 'without',
      deadline: '11/11/2023',
      cardOwner: '6499ce1761db2ad559ea7462',
    },
    {
      _id: '6499f64fa82d48b430dafa6d',
      title: 'test2',
      description: 'BBbbb',
      label: 'medium',
      deadline: '12/12/2022',
      cardOwner: '649ac92bff119f22533e7909',
    },
    {
      _id: '6499f64fa82d48b430daf10d',
      title: 'test2',
      description: 'BBbbb',
      label: 'medium',
      deadline: '12/12/2022',
      cardOwner: '649ac92bff119f22533e7909',
    },
    // {
    //   _id: '6499f64fa82d48b430da206d',
    //   title: 'test2',
    //   description: 'BBbbb',
    //   label: 'medium',
    //   deadline: '12/12/2022',
    //   cardOwner: '649ac92bff119f22533e7909',
    // },
    {
      _id: '6499f64fa82d48b430dafa7d',
      title: 'test4',
      description: 'BBbbb',
      label: 'high',
      deadline: '12/12/2022',
      cardOwner: '649ac92bff119f22533e7909',
    },
    {
      _id: '6499f64fa82d48b430dafa8d',
      title: 'test3',
      description: 'Ccccc',
      label: 'low',
      deadline: '12/12/2022',
      cardOwner: '649ac92bff119f22533e7111',
    },
  ],
};

// receive filter from filter component
const filter = '';

export const MainDashboard = () => {
  const { open, close, isOpen } = useToggleModal();

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
      {/* render if don't have board: */}
      {!result && (
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
      )}
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
                />
              );
            })}
          </ul>
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
            <ButtonPrimary type="button" onClick={open}>
              Add another column
            </ButtonPrimary>
          </div>
          <AddColumnModal isOpen={isOpen} onClose={close} />

          {/* <EditColumnModal isOpen={isOpen} onClose={close} /> */}
        </div>
      )}
    </div>
  );
};
