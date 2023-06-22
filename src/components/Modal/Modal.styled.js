import styled from 'styled-components';

export const StyledOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
/* background-color: ${({ theme }) => theme.colors.backgroundModalColor}; */
background-color: 'rgba(0, 0, 0, 0.3)';
z-index: 999;
`;

export const StyledModal = styled.div`
position: relative;
border-radius: ${({ theme }) => theme.spacing(2)};
padding-left: ${({ theme }) => theme.spacing(6)};
padding-top: ${({ theme }) => theme.spacing(19)};
padding-right: ${({ theme }) => theme.spacing(6)};
padding-bottom: ${({ theme }) => theme.spacing(6)};

@media (min-width: ${({ theme }) => theme.breakpoints.s}) {
	max-width: 90%;
}

@media (min-width: ${({ theme }) => theme.breakpoints.m}) {
	max-width: 50%;
}

@media (min-width: ${({ theme }) => theme.breakpoints.l}) {
	max-width: 30%;
}
`;

export const StyledClose = styled.button`
position: absolute;
top: 14px;
right: 14px;
margin-left: auto;
cursor: pointer;

/* font-weight: bold;
font-size: 18px;
color: tomato; */
`
