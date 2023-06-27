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
  z-index: 90;

  @media screen and (min-width: ${breakpoints.L}) {
    display: none;
  }
`;

export const SidebarContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  width: 225px;
  background: var(--sidebarBgColor);
  overflow: auto;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transform: translateX(-100%);
  transition: transform 250ms ease-in;

  &.open {
    transform: translateX(0);
  }

  @media screen and (min-width: ${breakpoints.M}) {
    width: 260px;
  }

  @media screen and (min-width: ${breakpoints.L}) {
    position: static;
    transform: translateX(0);
    transition: none;
  }
`;

export const SidebarContent = styled.div`
  margin-left: 14px;
  margin-right: 14px;

  ${({ marginTop }) => marginTop && 'margin-top: auto;'}

  @media screen and (min-width: ${breakpoints.M}) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;
