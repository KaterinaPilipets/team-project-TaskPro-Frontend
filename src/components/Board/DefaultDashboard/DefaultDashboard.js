import { StyledContainer, StyledLink, StyledText } from "./DefaultDashboard.styled";

export const DefaultDashboard = () => {
  return (
    <StyledContainer>
      <StyledText>
        Before starting your project, it is essential &nbsp;
        <StyledLink href="#1" >
          to create a board
        </StyledLink>
        &nbsp; to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </StyledText>
    </StyledContainer>
  );
};
