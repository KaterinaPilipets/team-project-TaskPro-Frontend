import styled from '@emotion/styled';
import { breakpoints } from 'constants';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const FilterContainer = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: right;
  padding: 14px 24px 0 0;
`;

export const TextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const StyledText = styled.p`
  text-align: center;
  display: block;
  color: var(--defaultText);

  @media screen and (min-width: ${breakpoints.S}) {
    /* padding-top: 250px; */
    max-width: 355px;
    font-size: var(--fontSize12);
  }

  @media screen and (min-width: ${breakpoints.M}) {
    /* padding-top: 476px; */
    max-width: 580px;
    font-size: var(--fontSize14);
  }

  @media screen and (min-width: ${breakpoints.L}) {
    /* padding-top: 350px; */
    max-width: 505px;
  }
`;

export const StyledLink = styled.a`
  color: var(--defaultAccentText);
`;
