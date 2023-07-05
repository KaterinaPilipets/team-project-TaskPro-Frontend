import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const TitleCard = styled.p`
  color: var(--createBoardInputTextFocus);
  font-size: 18px;
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
  resize: none;
`;

export const LabelTitle = styled.p`
  color: var(--addCardTextColor);
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 12px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`;

export const Labels = styled.div`
  display: flex;
  gap: 14px;
`;

export const LabelRadiobutton = styled(Field)``;

export const RadioLabel = styled.label`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  border: 2px solid ${props => props.buttoncolor};

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & input {
    display: none;
  }

  & input:checked + span {
    width: calc(100% - 4px);
    height: calc(100% - 4px);
  }
`;

export const Checkmark = styled.span`
  width: calc(100%);
  height: calc(100%);
  border-radius: 50%;
  background-color: ${props => props.buttoncolor};
  display: inline-block;
  opacity: 1;
  transition: opacity 0.25s ease;
`;

export const DedlineTitle = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`;

export const DedlineDataField = styled.input`
  font-size: 14px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const ButtonCard = styled.button`
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
