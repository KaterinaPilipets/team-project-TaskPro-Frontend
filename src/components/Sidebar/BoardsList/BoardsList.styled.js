import styled from '@emotion/styled';
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import GridViewIcon from '@mui/icons-material/GridView';
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
  color: var(--sidebarSecondaryTextColor);

  &:hover {
    color: var(--sidebarPrimaryTextColor);
  }

  &:hover .buttons {
    display: flex;
  }
`;

export const ListItemButton = styled(NavLink)`
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 14px;
  padding-right: 14px;

  @media screen and (min-width: ${breakpoints.M}) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const BoardIconContainer = styled.div`
  min-width: 18px;
  margin-right: 8px;
`;

export const BoardIcon = styled(GridViewIcon)`
  width: 18px;
  height: 18px;
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
  color: var(--sidebarSecondaryTextColor);
  padding: 0;
  ${({ marginRight }) => marginRight && 'margin-right: 8px;'};
`;

export const EditIcon = styled(CreateTwoToneIcon)`
  width: 16px;
  height: 16px;
`;

export const DeleteIcon = styled(DeleteTwoToneIcon)`
  width: 16px;
  height: 16px;
`;
