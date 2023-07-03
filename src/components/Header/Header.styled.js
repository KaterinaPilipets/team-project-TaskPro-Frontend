import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import { breakpoints } from 'constants';

export const ContainerStyled = styled.div`
  width: 100%;
  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--headerBgColor);
  @media screen and (min-width: ${breakpoints.M}) {
    padding: 18px 32px;
  }
  @media screen and (min-width: ${breakpoints.L}) {
    justify-content: flex-end;
  }
`;

export const BurgerBtn = styled.button`
  width: 24px;
  height: 24px;
  @media screen and (min-width: ${breakpoints.M}) {
    width: 32px;
    height: 32px;
  }
  @media screen and (min-width: ${breakpoints.L}) {
    display: none;
  }
`;

export const HeaderBtnWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;
export const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserAvatar = styled.img`
  border-radius: 8px;
  width: 32px;
  height: 32px;
`;

export const BurgerIcon = styled(MenuIcon)`
  color: var(--iconCloseModal);
`;

export const UserName = styled.p`
  color: var(--userNameText);
`;
