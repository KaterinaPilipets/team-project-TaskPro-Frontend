import styled from '@emotion/styled';
import { breakpoints } from 'constants';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

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

export const Icon = styled(ExitToAppIcon)`
  margin-right: 14px;
  color: var(--iconLogOutColor);
`;
