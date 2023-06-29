import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Registration = styled.div `
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 14px;
`
export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background: linear-gradient(180deg, #ffffff 0%, #ffffff 25%, #BEDBB0 92.19%);
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: column;
`
export const CenteredContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`
export const CustomButton = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  padding: 14px 131px 14px 130px;
  background: #161616;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  text-transform: none;
  @media screen and (max-width: 768px) { 
      padding: 14px 126px 14px 126px;
  }
`
export const LoginBtn = styled(NavLink)`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: #161616;
    cursor: pointer;
`
export const Logo = styled.div`
    width: 162px;
    height: 162px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-image: url('https://res.cloudinary.com/dsqxw0541/image/upload/v1687674728/TaskProImages/welcomeimages/w-desktop_qc2ytd.png');
    margin-bottom: 24px;

    @media screen and (max-width: 768px) {
          width: 124px;
          height: 124px;
          margin-bottom: 14px;
          background-image: url('https://res.cloudinary.com/dsqxw0541/image/upload/v1687674728/TaskProImages/welcomeimages/w-mobile_xrqyoo.png');
    }
`
export const LogoContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 14px;
    margin-bottom: 24px;
`
export const Text = styled.p `
    width: 473px;
    height: 36px;
    margin-bottom: 48px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: #161616; 
    @media screen and (max-width: 768px) {
        width: 335px;
        height: 54px;
        left: calc(50% - 335px/2);
    }
`
export const Svg = styled.svg `
    height: 48px;
    width: 48px;
    @media screen and (max-width: 768px) {
        height: 40px;
        width: 40px;
    }
`
export const Title = styled.p `
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    letter-spacing: -0.04em;
    color: #161616;
    @media screen and (max-width: 768px) {
        font-size: 28px;
        line-height: 42px;
    }
`