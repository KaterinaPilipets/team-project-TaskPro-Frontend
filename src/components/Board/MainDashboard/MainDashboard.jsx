import { ColumnTask } from 'components/Board/ColumnTask/ColumnTask';
// import { ButtonPrimary } from 'components/ButtonPrimary';
import { useToggleModal } from 'hooks';
import { AddColumnModal } from '../AddColumnModal';
import { Modal } from 'components/Modal';
import { useSelector } from 'react-redux';
import { board } from 'redux/board/boardSelector';
import {
  List,
  BoardContainer,
  BoardContent,
  StyledButtonAddColumn,
  StyledIconAddColumn,
  StyledSvgAddColumn,
} from './MainDashboard.styled';
import icon from '../../../sourse/sprite.svg';

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
    <BoardContainer>
      {/* render if have board: */}
      {result && (
        <BoardContent>
          <List>
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
          </List>
          <StyledButtonAddColumn type="button" onClick={open}>
            <StyledIconAddColumn>
              <StyledSvgAddColumn width="14" height="14">
                <use xlinkHref={`${icon}#icon-plus`} />
              </StyledSvgAddColumn>
            </StyledIconAddColumn>
            <span>Add another colum</span>
          </StyledButtonAddColumn>
        </BoardContent>
      )}
      {isOpen && (
        <Modal onClose={close}>
          <AddColumnModal onClose={close} />
        </Modal>
      )}
    </BoardContainer>
  );
};
