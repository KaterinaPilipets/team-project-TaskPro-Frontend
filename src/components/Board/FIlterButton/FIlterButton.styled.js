import styled from '@emotion/styled';

export const Button = styled.button`
  /* margin: 15px 15px auto auto; */
  /* position: absolute;
  top: 15px;
  right: 15px; */
  color: var(--filtersTitleColor);
  display: flex;
  align-items: center;
  font-size: var(--fontSize14);
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    color: var(--iconDeadlineColor);
  }
  &:hover svg {
    --color1: var(--iconDeadlineColor);
  }
`;

export const SvgIcon = styled.svg`
  margin-right: 8px;
  --color1: var(--filtersTitleColor);
`;
