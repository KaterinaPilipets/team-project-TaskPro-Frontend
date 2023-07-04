import styled from '@emotion/styled';
import { breakpoints } from 'constants';
import {
  StyledIcon,
  Svg,
  StyledButton,
} from 'components/ButtonPrimary/ButtonPrimary.styled';

export const List = styled.ul`
  display: flex;
  gap: 18px;
`;
export const BoardContent = styled.div`
  overflow-y: hidden;
  overflow-x: auto;

  padding-bottom: 16px;
  display: flex;
  gap: 18px;

  @media (min-width: 375px) {
    max-width: 768px;
  }
  @media (min-width: 768px) {
    max-width: 1440px;
  }
  @media (min-width: 1440px) {
    // height: 770px;
  }
`;
export const BoardContainer = styled.div`
  padding: 0 20px;
  width: 100vw;
  @media screen and (min-width: ${breakpoints.M}) {
    padding: 0 32px;
  }
  @media screen and (min-width: ${breakpoints.L}) {
    width: calc(100vw - 260px);
    padding: 0 24px;
  }
`;
export const StyledButtonAddColumn = styled(StyledButton)`
  width: 334px;
  height: 56px;
  padding: 14px 58px;
  color: var(--buttonAddColumnColor);
  background-color: var(--buttonAddColumnBgColor);
`;

export const StyledIconAddColumn = styled(StyledIcon)`
  background-color: var(--buttonAddColumnIconBgColor);
`;

export const StyledSvgAddColumn = styled(Svg)`
  stroke: var(--buttonAddColumnIconFill);
`;
