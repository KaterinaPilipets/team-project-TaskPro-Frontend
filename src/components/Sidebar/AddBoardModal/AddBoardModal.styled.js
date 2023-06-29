import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';
import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary';

export const TitleHelp = styled.p`
  color: var(--createBoardInputTextFocus);
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
`;

export const BoardText = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
  color: var(--createBoardInputTextFocus);
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const FormField = styled.div`
  margin-bottom: 24px;
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding: 14px 18px;
  background: inherit;
  border-radius: 8px;
  border: 1px solid var(--createBoardInputBorderColor);
  outline: none;
  color: var(--createBoardInputTextFocus);

  &::placeholder {
    color: var(--createBoardInputTextColor);
    font-size: 14px;
    font-weight: 400;
  }

  &:hover {
    border-color: var(--createBoardInputBorderFocus);
  }
`;

export const SubmitButton = styled(ButtonPrimary)`
  padding: 10px 0 11px 0;
`;

export const ErrorText = styled(ErrorMessage)`
  font-size: 14px;
  color: #da0e0e;
  margin-top: 12px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(8 * 32px);
  margin-bottom: 24px;
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
    outline: 1px solid var(--createBoardInputBorderFocus);
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
