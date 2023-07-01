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
    background: var(--welcomeBgColor);
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
  font-weight: var(--fontWeight500);
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  padding: 14px 131px 14px 130px;
  background: var(--buttonColor);
  border-radius: 8px;
  color: var(--lightColor);
  cursor: pointer;
  text-transform: none;
  @media screen and (max-width: 768px) { 
      padding: 14px 126px 14px 126px;
  }
`
export const LoginBtn = styled(NavLink)`
    font-style: normal;
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize14);
    line-height: 21px;
    letter-spacing: -0.02em;
    color: var(--buttonColor);
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
    font-weight: var(--fontWeight400);
    font-size: var(--fontSize14);
    line-height: 18px;
    letter-spacing: -0.02em;
    color: var(--buttonColor); 
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
    font-weight: var(--fontWeight600);
    font-size: var(--fontSize40);
    line-height: 60px;
    letter-spacing: -0.04em;
    color: var(--buttonColor);
    @media screen and (max-width: 768px) {
        font-size: 28px;
        line-height: 42px;
    }
`