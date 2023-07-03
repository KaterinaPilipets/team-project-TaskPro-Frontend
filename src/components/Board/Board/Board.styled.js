import styled from "@emotion/styled";
import { breakpoints } from "constants";

export const BoardContainer = styled.div`
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
  background-size: 100%;
  /* background-color: green; */
  @media screen and (min-width: ${breakpoints.XS}) {
    background-image: url(${(props) => props.backgroundImg.URL.mobile});
  }
  @media screen and (min-width: ${breakpoints.M}) {
    background-image: url(${(props) => props.backgroundImg.URL.tablet});
  }
  @media screen and (min-width: ${breakpoints.L}) {
    background-image: url(${(props) => props.backgroundImg.URL.desktop});
  }
`;
