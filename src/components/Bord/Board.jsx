import { MainDashboard } from './MainDashboard';
import { BoardBackground } from './BoardBackground';
import { HeaderDashboard } from './HeaderDashboard';

export const Board = () => {
  return (
    <BoardBackground child1={<HeaderDashboard />} child2={<MainDashboard />} />
  );
};
