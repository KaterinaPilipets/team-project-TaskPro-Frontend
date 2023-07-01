import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 24px;
  background: var(--helpBgColor);
  color: var(--helpText);
`;

export const Text = styled.p`
  margin-bottom: 18px;
  font-size: 14px;
  line-height: 1.429;
  letter-spacing: -0.02em;
`;

export const TextAccent = styled.span`
  color: var(--helpTextAccentColor);
`;

export const Button = styled.button`
  padding: 0;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: '-0.02em';
  display: flex;
  align-items: center;
`;

export const HelpIcon = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  --color1: var(--helpIconColor);
`;
export const HelpImgContainer = styled.div`
  width: 54px;
  height: 78px;
`;

export const HelpImage = styled.img`
  width: 100%;
`;
export const NeedHelpText = styled.span`
  color: var(--helpText);
`;
