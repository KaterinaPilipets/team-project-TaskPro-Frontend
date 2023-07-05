// import { useParams } from 'react-router';
import { FIlterButton } from '../FIlterButton/FIlterButton';
import { HeaderDashboardContainer, BoardTitle } from './HeaderDashboard.styled';
import { useSelector } from 'react-redux';

// title взять из редакса

export const HeaderDashboard = ({ boardId, handleFilterChange, filter }) => {
  // const { bId } = useParams();

  const board = useSelector(state =>
    state.boardsList.items.find(item => item._id === boardId)
  );

  return (
    <HeaderDashboardContainer>
      <BoardTitle>{board.title}</BoardTitle>
      <FIlterButton handleFilterChange={handleFilterChange} filter={filter} />
    </HeaderDashboardContainer>
  );
};
