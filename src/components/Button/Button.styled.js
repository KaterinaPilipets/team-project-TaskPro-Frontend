import styled from 'styled-components';

export const StyledButton = styled.button`
width: 100%;
font-family: inherit;
font-size: 14px;
text-align: center;
text-decoration: none;
color: inherit;
background-color: transparent;
border: none;
border-radius: 8px;
border-radius: ${({ theme }) => theme.spacing(2)};
cursor: pointer;
`;