import styled from '@emotion/styled';
import { breakpoints } from 'constants';

export const BoardContainer = styled.section`
  /* max-width: 1180px; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  flex-wrap: nowrap;
  background-origin: border-box;
  background-repeat: no-repeat;
  background-size: cover;

  // padding: 0 20px;
  @media screen and (min-width: ${breakpoints.XS}) {
    background-image: url(${props => props.backgroundImg.URL.mobile});
  }
  @media screen and (min-width: ${breakpoints.M}) {
    background-image: url(${props => props.backgroundImg.URL.tablet});
    // padding: 26px 32px 32px;
    // padding: 26px 32px 32px;
  }
  @media screen and (min-width: ${breakpoints.L}) {
    background-image: url(${props => props.backgroundImg.URL.desktop});
    // padding: 10px 24px;
  }
`;
