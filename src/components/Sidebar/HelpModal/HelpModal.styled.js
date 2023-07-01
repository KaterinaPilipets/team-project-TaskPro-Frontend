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

export const Textarea = styled(StyledField)`
  height: 120px;
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

export const ErrorMessageText = styled.div`
  color: var(--createBoardInputTextFocus);
  margin-top: 10px;
`;
