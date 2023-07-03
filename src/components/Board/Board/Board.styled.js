import styled from '@emotion/styled';
import { breakpoints } from 'constants';

import { bgs } from 'sourse/bgs';

export const BoardContainer = styled.div`
  /* width: 100%; */
  /* height: 100%; */
  padding: 14px 20px 24px;
  margin: 0 auto;

  @media screen and (min-width: ${breakpoints.XS}) {
width: 320px;
}

@media screen and (min-width: ${breakpoints.S}) {
width: 375px;
}

@media screen and(min-width: ${breakpoints.M}) {
  width: 768px;
	padding: 26px 32px 32px;
}

@media screen and(min-width: ${breakpoints.L}) {
  width: 1440px;
	padding: 10px 24px;
}

/* display: flex;
flex-direction: column;
justify-content: left;
align-items: flex-start;
flex-wrap: nowrap; */

/* background-image: url(${bgs[0].URL.desktop}); */

background-origin: border-box;
background-repeat: no-repeat;
background-size: 100%;
background-color: var(--boardBgColor);`;


//..export const BoardContainer = styled.div`
 / /* max-width: 1180px; */
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: left;
//   align-items: flex-start;
//   flex-wrap: nowrap;
//   background-origin: border-box;
//   background-repeat: no-repeat;
//   background-size: 100%;
//   /* background-color: green; */
//   @media screen and (min-width: ${breakpoints.XS}) {
//     background-image: url(${props => props.backgroundImg.URL.mobile});
//   }
//   @media screen and (min-width: ${breakpoints.M}) {
//     background-image: url(${props => props.backgroundImg.URL.tablet});
//   }
//   @media screen and (min-width: ${breakpoints.L}) {
//     background-image: url(${props => props.backgroundImg.URL.desktop});
//   }


