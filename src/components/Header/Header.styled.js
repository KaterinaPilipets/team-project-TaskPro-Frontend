import styled from '@emotion/styled';

export const ContainerStyled = styled.div`
  width: 100%;
  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #393939;
  @media screen and (min-width: 768px) {
    padding: 18px 32px;
  }
  @media screen and (min-width: 1280px) {
    justify-content: flex-end;
  }
`;

export const BurgerBtn = styled.div`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
  @media screen and (min-width: 1280px) {
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
`;
