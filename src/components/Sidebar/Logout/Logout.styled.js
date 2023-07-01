import styled from '@emotion/styled';
import { breakpoints } from 'constants';

export const Container = styled.div`
  margin-bottom: 24px;
`;

export const Button = styled.button`
  color: var(--sidebarPrimaryTextColor);
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  display: flex;
  align-items: center;

  @media screen and (min-width: ${breakpoints.M}) {
    font-size: 16px;
  }
`;

export const Icon = styled.svg`
  --color2: var(--iconLogOutColor);
  margin-right: 14px;
  width: 32px;
  height: 32px;
`;
