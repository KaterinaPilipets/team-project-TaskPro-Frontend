import styled from '@emotion/styled';
import { breakpoints } from 'constants';

export const StyledContainer = styled.div`
  margin: 0 auto;
  text-align: center;

  @media screen and (min-width: ${breakpoints.S}) {
    padding-top: 352px;
    max-width: 355px;
    font-size: var(--fontSize12);
  }

  @media screen and (min-width: ${breakpoints.M}) {
    padding-top: 476px;
    max-width: 580px;
  }

  @media screen and (min-width: ${breakpoints.L}) {
    padding-top: 350px;
    max-width: 505px;
    font-size: var(--fontSize14);
  }
`;

export const StyledText = styled.p`
  color: var(--defaultText);
`;

export const StyledLink = styled.a`
  color: var(--defaultAccentText);
`;
