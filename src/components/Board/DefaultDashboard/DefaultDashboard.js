import { useDispatch } from 'react-redux';
import { openAddBoardModal } from 'redux/sidebar/sidebarSlice';
import {
  StyledContainer,
  StyledLink,
  StyledText,
} from './DefaultDashboard.styled';
export const DefaultDashboard = () => {
  const dispatch = useDispatch();

  const open = () => {
    dispatch(openAddBoardModal());
  };

  return (
    <StyledContainer>
      <StyledText>
        Before starting your project, it is essential &nbsp;
        <StyledLink href="#1" onClick={open} style={{ color: '#BEDBB0' }}>
          to create a board
        </StyledLink>
        &nbsp; to visualize and track all the necessary tasks and milestones.
        This board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </StyledText>
    </StyledContainer>
  );
};
