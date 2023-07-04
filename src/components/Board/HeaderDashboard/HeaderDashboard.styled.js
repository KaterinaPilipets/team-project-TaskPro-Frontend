import styled from '@emotion/styled';
import { breakpoints } from 'constants';

export const HeaderDashboardContainer = styled.div`
  width: 100vw;
  display: flex;
  // flex-direction: row;
  justify-content: space-between;
  // align-items: center;

  padding: 14px 20px;

  @media screen and (min-width: ${breakpoints.M}) {
    padding: 26px 32px;
    // width: 768px;
  }
  @media screen and (min-width: ${breakpoints.L}) {
    padding: 10px 24px;

    width: calc(100vw - 260px);
  }
`;

export const BoardTitle = styled.h3`
  font-size: var(--fontSize18);
  color: var(--buttonAddColumnColor);
`;
