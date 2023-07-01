import { ButtonBoardFilters } from '../ButtonBoardFilters/ButtonBoardFilters';
import { HeaderDashboardContainer, BoardTitle } from './HeaderDashboard.styled';

// title взять из редакса

export const HeaderDashboard = ({ title }) => {
  return (
    <HeaderDashboardContainer>
      {/* <h3>{title}</h3> */}
      <BoardTitle>Board name</BoardTitle>
      <ButtonBoardFilters />
    </HeaderDashboardContainer>
  );
};
