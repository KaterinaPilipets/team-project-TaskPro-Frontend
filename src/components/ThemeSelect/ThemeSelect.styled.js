import styled from '@emotion/styled';

export const StyledSelectWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;
export const StyledTitle = styled.p`
  font-size: var(--fontSize14);
  font-family: var(--fontFamily);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.28px;
  color: var(--themeText);
`;

export const StyledList = styled.ul`
  display: inline-flex;
  position: absolute;
  top: 30px;
  left: -20px;
  padding: 18px 44px 18px 18px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: var(--borderRadius8);
  border: 1px solid var(--themeBorderColor);
  background-color: var(--themeBgColor);
  gap: 4px;
`;

export const StyledItem = styled.li`
  cursor: pointer;
  color: var(--themeSelectText);
  transition: color var(--transition);
  :hover {
    color: var(--themeSelectTextAccent);
  }
`;
