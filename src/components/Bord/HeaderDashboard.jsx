import { BoardFilters } from './BoardFilters';

// title взять из редакса

export const HeaderDashboard = ({ title }) => {
  return (
    <div>
      <h3>{title}</h3>
      <BoardFilters />
    </div>
  );
};
