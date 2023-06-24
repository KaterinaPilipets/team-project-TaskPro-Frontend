import styled from '@emotion/styled';

export const StyledOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: 'rgba(0, 0, 0, 0.3)';
z-index: 999;
`;

export const StyledModal = styled.div`
position: relative;
border-radius: var(--borderRadius8);
padding-left: 24px;
padding-top: 75px;
padding-right: 24px;
padding-bottom: 24px;

@media (min-width: var(--breakpointsS)) {
	max-width: 90%;
}

@media (min-width: var(--breakpointsM)) {
	max-width: 50%;
}

@media (min-width: var(--breakpointsL)) {
	max-width: 30%;
}
`;

export const StyledCloseButton = styled.button`
position: absolute;
top: 14px;
right: 14px;
margin-left: auto;
cursor: pointer;
`
export const Svg = styled.svg`
fill: var(--iconCloseModal);
`
