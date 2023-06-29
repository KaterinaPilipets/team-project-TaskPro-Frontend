import styled from '@emotion/styled';
import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary';
export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  gap: 8px;
`;
export const HeaderColumn = styled.div`
  border-radius: 8px;
  width: 100%;
  height: 56px;
  padding: 14px 24px;
  background-color: var(--bgColor);
  color: var(--titleColor);
  font-weight: var(--fontWeight500);
  // margin-bottom: 14px;
`;
export const ButtonPrimaryStyled = styled(ButtonPrimary)`
  margin-top: auto;
`;
export const Column = styled.div`
  width: 334px;
  display: flex;
  flex-direction: column;

  gap: 14px;
`;
