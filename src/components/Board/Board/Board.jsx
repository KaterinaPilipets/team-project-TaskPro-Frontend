import { MainDashboard } from '../MainDashboard/MainDashboard';
import { HeaderDashboard } from '../HeaderDashboard/HeaderDashboard';
import { BoardContainer } from './Board.styled';

export const Board = () => {
  return (
    <BoardContainer>
      <HeaderDashboard />
      <MainDashboard />
    </BoardContainer>
  );
};
