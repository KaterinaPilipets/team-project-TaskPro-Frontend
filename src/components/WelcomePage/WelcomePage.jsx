import React from 'react';
import sprite from '../../sourse/sprite.svg';
import { CustomButton, LoginBtn, Registration, Container, CenteredContainer, Logo, LogoContainer, Text, Svg, Title } from "./WelcomePage.styled"

function WelcomePage() {
  return (
    <Container>
        <CenteredContainer>
            <Logo />
          <LogoContainer>
            <Svg><use xlinkHref={`${sprite}#icon-welcome`} /></Svg>
            <Title>TASK PRO</Title>
          </LogoContainer>
          <Text>
            Supercharge your productivity and take control of your tasks with Task
            Pro - Don't wait, start achieving your goals now!
          </Text>
        <Registration>
            <CustomButton to="/auth/register">Registration</CustomButton >
            <LoginBtn to="/auth/login">Log In</LoginBtn >
        </Registration>
        </CenteredContainer>
    </Container>
  );
}

export default WelcomePage;