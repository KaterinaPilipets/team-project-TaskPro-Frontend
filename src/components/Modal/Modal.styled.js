import styled from '@emotion/styled';
import { breakpoints } from 'constants';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const StyledModal = styled.div`
  position: relative;
  border-radius: var(--borderRadius8);
  background-color: var(--profileBgColor);
  padding: 24px;

  @media (max-width: 374px) {
    min-width: 50%;
  }

  @media (min-width: ${breakpoints.S}) {
    min-width: 335px;
  }

  @media (min-width: ${breakpoints.M}) {
    min-width: 350px;
  }

  @media (min-width: ${breakpoints.L}) {
    min-width: 350px;
  }
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  margin-left: auto;
  cursor: pointer;
`;

export const Svg = styled.svg`
  stroke: var(--iconCloseModal);
`;
