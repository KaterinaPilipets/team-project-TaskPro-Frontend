// import { useParams } from 'react-router';
import { ButtonBoardFilters } from '../ButtonBoardFilters/ButtonBoardFilters';
import { HeaderDashboardContainer, BoardTitle } from './HeaderDashboard.styled';
import { useSelector } from 'react-redux';

// title взять из редакса

export const HeaderDashboard = ({ boardId, handleFilterChange }) => {
  // const { bId } = useParams();

  const board = useSelector(state =>
    state.boardsList.items.find(item => item._id === boardId)
  );

  return (
    <HeaderDashboardContainer>
      <BoardTitle>{board.title}</BoardTitle>
      <ButtonBoardFilters handleFilterChange={handleFilterChange} />
    </HeaderDashboardContainer>
  );
};
