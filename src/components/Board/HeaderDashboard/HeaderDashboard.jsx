import { FIlterButton } from '../FIlterButton/FIlterButton';
import { HeaderDashboardContainer, BoardTitle } from './HeaderDashboard.styled';
import { useSelector } from 'react-redux';


export const HeaderDashboard = ({ boardId }) => {

  const board = useSelector(state =>
    state.boardsList.items.find(item => item._id === boardId)
  );

  return (
    <HeaderDashboardContainer>
      <BoardTitle>{board.title}</BoardTitle>

      <FIlterButton />
   </HeaderDashboardContainer>
  );
};
