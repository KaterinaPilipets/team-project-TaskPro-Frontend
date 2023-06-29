import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@mui/material';
import styled from '@emotion/styled';

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background: linear-gradient(180deg, #ffffff 0%, #ffffff 25%, #BEDBB0 92.19%);
    background-repeat: no-repeat;
    background-size: cover;
`
export const Content = styled.div `
    text-align: center;
    background: #151515;
    border-radius: 8px;
`
export const Menu = styled.div`
  padding-top: 40px;
  display: flex;
`;

export const StyledLink = styled(Link)`
  left: 160px;
  top: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.3);
`;

export const StyledRegistrationLink = styled(Link)`
  margin-left: 40px;
  margin-right: 14px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #FFFFFF;

  @media screen and (max-width: 768px) {
    margin-left: 24px;
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 10px;

  input {
    width: 326px;
    height: 49px;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 14px;
    left: 40px;
    top: 107px;
    color: white;
    background: #1F1F1F;
    opacity: 0.4;
    border: 1px solid #BEDBB0;
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
`
export const PasswordInputField = styled.input`
  width: 326px;
  height: 49px;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 14px;
  left: 40px;
  top: 107px;
  color: white;
  background: #1F1F1F;
  opacity: 0.4;
  border: 1px solid #BEDBB0;
  padding-left: 18px;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;
`;

export const PasswordToggle = styled.span`
    position: absolute;
    right: 60px;
    top: 19px;
    cursor: pointer;
    color: #737373;
    @media screen and (max-width: 768px) {
        right: 42.75px
    }
`;

export const PasswordIcon = styled(FontAwesomeIcon)`
    color: #737373;
`;
export const Svg = styled.svg`
    width: 16.5px;
    // height: 12px;
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translateY(-45%);
    // fill: #737373;
`;
export const RegisterBtn = styled.button`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.02em;
    width: 344px;
    height: 49px;
    background: #BEDBB0;
    border-radius: 8px;
    color: #161616;
    margin-bottom: 40px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        width: 287px;
        margin-bottom: 24px;
    }
`;
