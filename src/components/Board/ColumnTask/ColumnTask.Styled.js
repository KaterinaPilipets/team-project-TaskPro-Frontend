import styled from '@emotion/styled';
import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary';
export const List = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  gap: 8px;
  padding-right: 8px;
  height: calc(100vh - 286px);
  // max-heigth: calc(100vh-250px);
  // overflow-x: hidden;
  overflow-y: auto;
`;
export const HeaderColumn = styled.div`
  border-radius: 8px;
  width: 334px;
  height: 56px;
  padding: 14px 24px;
  background-color: var(--bgColor);
  color: var(--titleColor);
  font-weight: var(--fontWeight500);
  display: flex;
  // margin-bottom: 14px;
`;
export const ButtonPrimaryStyled = styled(ButtonPrimary)`
  width: 334px;
  margin-top: auto;
`;
export const Column = styled.li`
  width: 350px;
  display: flex;
  flex-direction: column;

  gap: 14px;
`;
