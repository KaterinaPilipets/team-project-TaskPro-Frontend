import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { breakpoints } from 'constants';

export const Container = styled.div`
  margin-bottom: 24px;
  min-height: 124px;
  overflow: auto;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  --color1: var(--sidebarSecondaryTextColor);
  color: var(--sidebarSecondaryTextColor);
`;

export const ListItemButton = styled(NavLink)`
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 14px;
  padding-right: 14px;
  position: relative;

  &.active {
    background: var(--blockEditBgColor);

    &::after {
      content: '';
      height: 100%;
      width: 4px;
      right: 0;
      background: #fff;
      border-radius: 25px 0 0 25px;
      position: absolute;
      background: var(--blockEditBorderAccent);
    }
  }
  &:hover,
  &.active {
    --color1: var(--sidebarPrimaryTextColor);
    color: var(--sidebarPrimaryTextColor);
    background: none;
  }

  &.active .buttons {
    display: flex;
  }

  @media screen and (min-width: ${breakpoints.M}) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const BoardIconContainer = styled.div`
  min-width: 18px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoardTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: '-0.02em';
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex-grow: 1;
`;

export const ActionsContainer = styled.div`
  display: none;
`;

export const ActionButton = styled.button`
  stroke: var(--sidebarSecondaryTextColor);
  padding: 0;
  ${({ marginRight }) => marginRight && 'margin-right: 8px;'};
`;

export const ActionButtonIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

export const Svg = styled.svg`
  width: 18px;
  height: 18px;
`;
