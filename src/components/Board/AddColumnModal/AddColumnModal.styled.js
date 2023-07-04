import { Form, Field, ErrorMessage } from 'formik';

import styled from '@emotion/styled';
import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary';

export const StyledTitle = styled.p`
  color: var(--createBoardColor);
  font-size: var(--fontSize18);
  margin-bottom: 24px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const StyledFormField = styled(Field)`
  padding: 14px 18px;
  background: inherit;
  border-radius: var(--borderRadius8);
  border: 1px solid var(--createBoardInputBorderColor);
  color: var(--createBoardInputTextFocus);
  margin-bottom: 24px;
  transition-property: border;
  transition: border var(--transition);

  &::placeholder {
    color: var(--createBoardInputTextColor);
  }

  &:focus {
    outline: none;
    border: 1px solid var(--createBoardInputBorderFocus);
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  font-size: var(--fontSize12);
  color: red;
  margin-bottom: 14px;
`;

export const StyledButton = styled(ButtonPrimary)`
  padding: 10px 0px;
`;
export const ErrorMessageText = styled.div`
  color: var(--createBoardInputTextFocus);
  margin-top: 10px;
`;
