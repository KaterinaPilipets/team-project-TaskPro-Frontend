import { useDispatch } from 'react-redux';
import { openAddBoardModal } from 'redux/sidebar/sidebarSlice';
// import { FIlterButton } from '../FIlterButton/FIlterButton';
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
      {/* <div
        style={{
          width: '100%',
          displey: 'flex',
          justifyContent: 'right',
        }}
      >
        <FIlterButton />
      </div> */}

      <StyledText>
        Before starting your project, it is essential &nbsp;
        <StyledLink href="#" onClick={open}>
          to create a board
        </StyledLink>
        &nbsp; to visualize and track all the necessary tasks and milestones.
        This board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </StyledText>
    </StyledContainer>
  );
};

//add filterchange
