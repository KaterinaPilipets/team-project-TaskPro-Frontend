import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const TitleHelp = styled.p`
  color: var(--createBoardInputTextFocus);
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const StyledField = styled(Field)`
  padding: 14px 18px;
  background: inherit;
  border-radius: 8px;
  border: 1px solid var(--createBoardInputBorderColor);
  outline: none;
  color: var(--createBoardInputTextFocus);

  &::placeholder {
    color: var(--createBoardInputTextColor);
  }

  &:hover {
    border-color: var(--createBoardInputBorderFocus);
  }
`;

export const ButtonHelp = styled.button`
  display: inline-block;
  border-radius: 8px;
  background: var(--createBoardButtonBgColor);
  color: var(--helpModalButtonColor);
  padding: 14px 0;
  margin-top: 10px;
`;

export const ErrorText = styled(ErrorMessage)`
  font-size: 12px;
  color: var(--createBoardInputTextFocus);
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(8 * 32px);
`;

export const BackgroundIcon = styled.img`
  width: 28px;
  height: 28px;
`;

export const RadioLabel = styled.div`
  margin-right: 4px;
  margin-bottom: 4px;
  border-radius: 6px;
  cursor: pointer;
`;

export const RadioField = styled(Field)`
  position: fixed;
  opacity: 0;
  pointer-events: none;

  &:hover ~ .background-label,
  &:checked ~ .background-label {
    outline: 1px solid green;
  }

  &:hover ~ .icon-label,
  &:checked ~ .icon-label {
    --color1: var(--createBoardButtonIconFill);
  }
`;

export const IconContainer = styled.div`
  --color1: var(--createBoardIconsFill);
  margin-right: 8px;
  cursor: pointer;
`;

export const Svg = styled.svg`
  width: 18px;
  height: 18px;
`;
