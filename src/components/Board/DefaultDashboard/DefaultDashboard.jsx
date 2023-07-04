import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getActiveBoard } from 'redux/auth/authSelectors';
import { openAddBoardModal } from 'redux/sidebar/sidebarSlice';
// import { FIlterButton } from '../FIlterButton/FIlterButton';
import {
  StyledContainer,
  StyledLink,
  StyledText,
} from './DefaultDashboard.styled';
export const DefaultDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeBoard = useSelector(getActiveBoard);
  useEffect(() => {
    if (activeBoard) {
      navigate(`${activeBoard}`);
    }
  }, [activeBoard, navigate]);

  const open = () => {
    dispatch(openAddBoardModal());
  };

  return (
    !activeBoard && (
      <StyledContainer>
        <StyledText>
          Before starting your project, it is essential &nbsp;
          <StyledLink href="#" onClick={open}>
            to create a board
          </StyledLink>
          &nbsp; to visualize and track all the necessary tasks and milestones.
          This board serves as a powerful tool to organize the workflow and
          ensure effective collaboration among team members.
        </StyledText>
      </StyledContainer>
    )
  );
};

//add filterchange
