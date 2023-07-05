import { useToggleModal } from 'hooks';
import { ModalBoardFilters } from '../ModalBoardFilters/ModalBoardFilters.jsx';
import icon from 'sourse/sprite.svg';
import { BoardModal } from '../BoardModal/BoardModal.jsx';
import { Button, SvgIcon } from './FIlterButton.styled.js';

export const FIlterButton = ({ handleFilterChange, filter }) => {
  const { open, close, isOpen } = useToggleModal();

  return (
    <>
      <Button type="button" onClick={open}>
        <SvgIcon width="16" height="16">
          <use xlinkHref={`${icon}#icon-filter`}></use>
        </SvgIcon>
        Filters
      </Button>
      {isOpen && (
        <BoardModal onClose={close}>
          <ModalBoardFilters
            title={'111'}
            boardId={'64a152c1d874b931a608b6fe'}
            handleFilterChange={handleFilterChange}
            filter={filter}
          />
        </BoardModal>
      )}
    </>
  );
};

// ButtonBoardFilters
