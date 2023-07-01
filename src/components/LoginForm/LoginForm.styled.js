import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@mui/material';
import styled from '@emotion/styled';
import { ErrorMessage } from 'formik';

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background: var(--welcomeBgColor);
    background-repeat: no-repeat;
    background-size: cover;
`
export const Content = styled.div `
  text-align: center;
  background: var(--bgColorAuth);
  border-radius: 8px;
  padding: 40px;
`
export const Menu = styled.div`
  display: flex;
`;

export const StyledLink = styled(Link)`
  left: 160px;
  top: 40px;
  font-style: normal;
  font-weight: var(--fontWeight500);
  font-size: var(--fontSize18);
  line-height: 27px;
  letter-spacing: -0.02em;
  color: var(--lightColor);
`;

export const StyledRegistrationLink = styled(Link)`
  margin-right: 14px;
  font-style: normal;
  font-weight: var(--fontWeight500);
  font-size: var(--fontSize18);
  line-height: 27px;
  letter-spacing: -0.02em;
  color: var(--inputTextColor);

  @media screen and (max-width: 768px) {
    margin-left: 24px;
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 14px;

  input {
    width: 326px;
    height: 49px;
    left: 40px;
    top: 107px;
    color: var(--lightColor);
    background: var(--inputBgColor);
    opacity: 0.4;
    border: 1px solid var(--buttonBgColor);
    padding-left: 18px;
    box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
    border-radius: 8px;
    @media screen and (max-width: 768px) {
        width: 287px;
        margin-left: 24px;
        margin-right: 24px;

    }
  }
`;
export const PasswordInput = styled.div `
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 14px;
`
export const PasswordInputField = styled.input`
  width: 326px;
  height: 49px;
  left: 40px;
  top: 107px;
  color: var(--lightColor);
  background: var(--inputBgColor);
  opacity: 0.4;
  border: 1px solid var(--inputBorderFocus);
  padding-left: 18px;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;
`;

export const PasswordToggle = styled.span`
    position: absolute;
    right: 18px;
    top: 19px;
    cursor: pointer;
    color: var(--passwordColor);
    @media screen and (max-width: 768px) {
        right: 42.75px
    }
`;

export const PasswordIcon = styled(FontAwesomeIcon)`
    color: var(--passwordColor);
`;
export const Svg = styled.svg`
  width: 16.5px;
  height: 16px;
  top: 50%;
  right: 4px;
`;
export const LoginBtn = styled.button`
    font-style: normal;
    font-weight: var(--fontWeight500);
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    margin-top: 24px;
    letter-spacing: -0.02em;
    width: 100%;
    height: 49px;
    background: var(--buttonBgColor);
    border-radius: 8px;
    color: var(--buttonColor);
    cursor: pointer;
    @media screen and (max-width: 768px) {
        width: 287px;
        margin-bottom: 24px;
    }
`;

export const ErrorText = styled(ErrorMessage)`
  font-size: 15px;
  color: white;
`;