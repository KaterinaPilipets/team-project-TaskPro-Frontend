import styled from '@emotion/styled';
import { breakpoints } from 'constants';

export const HeaderDashboardContainer = styled.div`
  /* width: 100%; */
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
  align-items: center;
  margin-bottom:39px;


@media screen and (min-width: ${breakpoints.M}) {
margin-bottom: 26px;
}

@media screen and (min-width: ${breakpoints.L}) {
margin-bottom: 10px;
}
`;

export const BoardTitle = styled.h3`
  font-size: var(--fontSize18);
  color: var(--boardTitleText);
`;



