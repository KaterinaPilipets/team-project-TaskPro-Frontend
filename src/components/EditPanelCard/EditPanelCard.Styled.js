import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  gap: 8px;
  margin-left: auto;
  margin-top: 15px;
`;

export const DeadlineWrapper = styled.div`
  position: relative;
  background-color: transparent;
`;
export const DeadlineIconBlur = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 16px;
  background: rgba(190, 219, 176, 0.4);
  filter: blur(5.5px);
`;

export const DeadlineIcon = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  stroke: var(--iconDeadlineColor);
`;

export const BtnWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
`;
