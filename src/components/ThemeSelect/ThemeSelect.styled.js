import styled from '@emotion/styled';

export const StyledSelectWrapper = styled.div`
  display: flex;
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
position: absolute;
opacity: ${(props) => (props.isOpen ? '1' : '0')};
transform: translateY(${(props) => (props.isOpen ? '4px' : '-150px')});
transition-property: opacity, transform;
transition: opacity var(--transition), transform var(--transition);

display: inline-flex;
padding: 18px 44px 18px 18px;
flex-direction: column;
justify-content: center;
align-items: flex-start;

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
