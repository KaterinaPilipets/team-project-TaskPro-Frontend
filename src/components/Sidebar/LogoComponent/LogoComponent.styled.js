import styled from '@emotion/styled';

export const Container = styled.div`
  color: var(--logoColor);
  margin-bottom: 60px;
  padding-top: 24px;
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  color: var(--logoIconFill);
  background: var(--logoBgColor);
`;

export const AppName = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.04em;
`;
