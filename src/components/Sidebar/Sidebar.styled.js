import styled from '@emotion/styled';
import { breakpoints } from 'constants';

export const SidebarContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  max-width: 225px;
  background: var(--sidebarBgColor);

  @media screen and (min-width: ${breakpoints.M}) {
    max-width: 260px;
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
