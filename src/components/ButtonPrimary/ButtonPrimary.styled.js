import styled from '@emotion/styled';

export const StyledButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 14px 0px;
width: 100%;
font-size: var(--fontSize14);
font-family: var(--fontFamily);
font-weight: var(--fontWeight500);
color: var(--buttonAddCardColor);
background-color: var(--buttonAddCardBgColor);
border-radius: var(--borderRadius8);
`;

export const StyledIcon = styled.span`
display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 8px;
  background-color: var(--buttonAddCardIconBgColor);
  border-radius: var(--borderRadius8);
  `;

export const Svg = styled.svg`
fill: var(--buttonAddCardIconFill);
`
