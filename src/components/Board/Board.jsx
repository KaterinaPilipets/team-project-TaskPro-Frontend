import { MainDashboard } from './MainDashboard';
import { HeaderDashboard } from './HeaderDashboard';

export const Board = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
        alignItems: 'flex-start',
        wrap: 'nowrap',

        // backgroundImage: '//////',
      }}
    >
      <HeaderDashboard />
      <MainDashboard />
    </div>
  );
};
