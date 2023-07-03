import { useToggleModal } from 'hooks';
import { ModalBoardFilters } from '../ModalBoardFilters/ModalBoardFilters.jsx';
import icon from 'sourse/sprite.svg';
import { BoardModal } from '../BoardModal/BoardModal';
import { FilterButton, SvgIcon } from './ButtonBoardFilters.styled';

export const ButtonBoardFilters = ({ handleFilterChange }) => {
  const { open, close, isOpen } = useToggleModal();

  return (
    <>
      <FilterButton type="button" onClick={open}>
        <SvgIcon width="16" height="16">
          <use xlinkHref={`${icon}#icon-filter`}></use>
        </SvgIcon>
        Filters
      </FilterButton>
      {isOpen && (
        <BoardModal onClose={close}>
          <ModalBoardFilters
            title={'111'}
            boardId={'64a152c1d874b931a608b6fe'}
            handleFilterChange={handleFilterChange}
          />
        </BoardModal>
      )}
    </>
  );
};
